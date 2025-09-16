(function(){
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');
  const fastMode = document.getElementById('fastMode');
  const transcriptEl = document.getElementById('transcript');
  const agentsListEl = document.getElementById('agentsList');
  const globalProgress = document.getElementById('globalProgress');
  const resultSummary = document.getElementById('resultSummary');
  const humanParty = document.getElementById('humanParty');
  const ivrParty = document.getElementById('ivrParty');
  const humanStatus = document.getElementById('humanStatus');
  const ivrStatus = document.getElementById('ivrStatus');

  const nowHHMMSS = () => new Date().toLocaleTimeString([], {hour12:false});
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  let running = false;
  let timers = [];

  // Transcript script
  const transcriptScript = [
    { speaker: 'human', text: "Hi, I'd like to open a new bank account." },
    { speaker: 'ivr', text: "Absolutely. I'll guide you and orchestrate our backend agents to get this done." },
    { speaker: 'ivr', text: "First, may I have your full name?" },
    { speaker: 'human', text: "Jordan Lee." },
    { speaker: 'ivr', text: "Thanks, Jordan. What's your date of birth?" },
    { speaker: 'human', text: "August 20, 1992." },
    { speaker: 'ivr', text: "And your email address?" },
    { speaker: 'human', text: "jordan.lee@example.com" },
    { speaker: 'ivr', text: "Great. Starting identity and compliance checks now." },
    { speaker: 'ivr', text: "Meanwhile, do you prefer a checking or savings account?" },
    { speaker: 'human', text: "Checking." },
    { speaker: 'ivr', text: "All right. Creating your checking account." },
    { speaker: 'ivr', text: "Almost done. Generating your documents and sending a welcome email." },
    { speaker: 'ivr', text: "All set. Your account is ready. Anything else I can help with?" },
    { speaker: 'human', text: "No, that's all. Thanks!" }
  ];

  // Agent pipeline
  const agentDefs = [
    {
      id:'router',
      name:'Orchestrator Router',
      desc:'Analyze intent and route tasks',
      duration: 900,
      logs: [
        "intent=OpenNewAccount",
        "confidence=0.93",
        "route=[identity,kyc,credit,provision,document,notify]"
      ]
    },
    {
      id:'identity',
      name:'Identity Verification Agent',
      desc:'Verify PII and match with records',
      duration: 1600,
      dependsOn:['router'],
      logs: (ctx)=>[
        `pii.name="${ctx.name}"`,
        `pii.dob="${ctx.dob}"`,
        `email="${ctx.email}"`,
        "match.score=0.98",
        "status=verified"
      ]
    },
    {
      id:'kyc',
      name:'KYC/AML Compliance Agent',
      desc:'Sanctions screening and risk scoring',
      duration: 1400,
      dependsOn:['identity'],
      logs: [
        "pep=false",
        "sanctions=false",
        "risk_score=0.12",
        "status=pass"
      ]
    },
    {
      id:'credit',
      name:'Credit Inquiry Agent',
      desc:'Soft pull credit score',
      duration: 1200,
      dependsOn:['identity'],
      logs: ()=>{
        const score = rand(690, 780);
        return [
          `bureau=TransUnion`,
          `score=${score}`,
          `decision=${score>700?'approve':'review'}`
        ];
      }
    },
    {
      id:'provision',
      name:'Account Provisioning Agent',
      desc:'Create account in core banking',
      duration: 1800,
      dependsOn:['kyc'],
      logs: (ctx)=>[
        `type=${ctx.accountType}`,
        `core.banking.api=/v1/accounts`,
        `account_id=${ctx.accountId}`,
        "status=created"
      ]
    },
    {
      id:'document',
      name:'Document Generation Agent',
      desc:'Generate agreements and disclosures',
      duration: 900,
      dependsOn:['provision'],
      logs: (ctx)=>[
        `doc.bundle=account_welcome_${ctx.accountId}.pdf`,
        "pages=7",
        "status=generated"
      ]
    },
    {
      id:'notify',
      name:'Notification Agent',
      desc:'Send welcome email/SMS',
      duration: 700,
      dependsOn:['document'],
      logs: (ctx)=>[
        `email="${ctx.email}"`,
        `subject="Welcome, ${ctx.name.split(' ')[0]}!"`,
        "channels=[email,sms]",
        "status=sent"
      ]
    }
  ];

  // State containers
  const agentState = new Map(); // id -> {el, status, start, end}
  const ctx = {
    name: "Jordan Lee",
    dob: "1992-08-20",
    email: "jordan.lee@example.com",
    accountType: "checking",
    accountId: null
  };

  function clearAllTimers(){
    for(const t of timers){ clearTimeout(t); }
    timers = [];
  }

  function resetUI(){
    clearAllTimers();
    running = false;
    startBtn.disabled = false;
    resetBtn.disabled = true;
    transcriptEl.innerHTML = '';
    agentsListEl.innerHTML = '';
    globalProgress.style.width = '0%';
    resultSummary.textContent = '';
    humanStatus.textContent = 'Idle';
    ivrStatus.textContent = 'Idle';
    humanParty.classList.remove('speaking');
    ivrParty.classList.remove('speaking');
    agentState.clear();
  }

  function createAgentCard(def){
    const wrapper = document.createElement('div');
    wrapper.className = 'agent';
    wrapper.dataset.id = def.id;

    const dot = document.createElement('div');
    dot.className = 'state-dot';

    const mid = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = def.name;
    const desc = document.createElement('div');
    desc.className = 'desc';
    desc.textContent = def.desc;
    mid.appendChild(title);
    mid.appendChild(desc);

    const right = document.createElement('div');
    right.className = 'right';
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = 'Pending';
    right.appendChild(badge);

    const logs = document.createElement('div');
    logs.className = 'logs';
    logs.setAttribute('aria-label', `${def.name} logs`);

    wrapper.appendChild(dot);
    wrapper.appendChild(mid);
    wrapper.appendChild(right);
    wrapper.appendChild(logs);

    agentsListEl.appendChild(wrapper);

    agentState.set(def.id, {
      el: wrapper,
      status: 'pending',
      start: null,
      end: null,
      logsEl: logs,
      dot,
      badge
    });
  }

  function logToAgent(id, line){
    const st = agentState.get(id);
    if(!st) return;
    const el = document.createElement('div');
    el.className = 'logline';
    const time = document.createElement('span');
    time.className = 'logtime';
    time.textContent = `[${nowHHMMSS()}]`;
    const text = document.createElement('span');
    text.innerHTML = sanitize(line)
      .replace(/(\w+)=/g, '<span class="kv">$1=</span>');
    el.appendChild(time);
    el.appendChild(text);
    st.logsEl.appendChild(el);
    st.logsEl.scrollTop = st.logsEl.scrollHeight;
  }

  function setAgentStatus(id, status){
    const st = agentState.get(id);
    if(!st) return;
    st.status = status;
    st.dot.classList.remove('running','success','failed');
    st.badge.classList.remove('success','failed');

    if(status==='running'){
      st.dot.classList.add('running');
      st.badge.textContent = 'Running';
    } else if(status==='success'){
      st.dot.classList.add('success');
      st.badge.textContent = 'Success';
      st.badge.classList.add('success');
    } else if(status==='failed'){
      st.dot.classList.add('failed');
      st.badge.textContent = 'Failed';
      st.badge.classList.add('failed');
    } else {
      st.badge.textContent = 'Pending';
    }
  }

  function sanitize(str){
    return String(typeof str === 'string' ? str : JSON.stringify(str))
      .replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  function appendMessage(speaker, text){
    const msg = document.createElement('div');
    msg.className = `msg ${speaker}`;
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = `${speaker==='human'?'Human':'IVR Agent'} • ${nowHHMMSS()}`;
    const body = document.createElement('div');
    body.className = 'text';
    msg.appendChild(meta);
    msg.appendChild(body);

    transcriptEl.appendChild(msg);
    transcriptEl.scrollTop = transcriptEl.scrollHeight;

    // Typewriter effect
    typewriter(body, text, 12);

    // Speaking visual
    if(speaker==='human'){
      humanStatus.textContent = 'Speaking';
      ivrStatus.textContent = 'Listening';
      humanParty.classList.add('speaking');
      ivrParty.classList.remove('speaking');
    } else {
      humanStatus.textContent = 'Listening';
      ivrStatus.textContent = 'Speaking';
      ivrParty.classList.add('speaking');
      humanParty.classList.remove('speaking');
    }

    // Reset status after short delay
    const t = setTimeout(()=>{
      humanStatus.textContent = 'Idle';
      ivrStatus.textContent = 'Idle';
      humanParty.classList.remove('speaking');
      ivrParty.classList.remove('speaking');
    }, Math.min(2500, 1000 + text.length * 20));
    timers.push(t);
  }

  function typewriter(el, text, cps=15){
    const fast = fastMode.checked;
    const speed = fast ? 1000 : 1000; // total-ish; we'll keep per char timing
    const perChar = fast ? 0 : Math.max(8, Math.floor(900 / Math.max(10, text.length)));
    let i = 0;
    const write = ()=>{
      el.textContent = text.slice(0, i);
      if(i < text.length){
        i++;
        const t = setTimeout(write, perChar);
        timers.push(t);
      }
    };
    write();
  }

  function computeProgress(){
    // Average completion across all agents by status/time
    let done = 0;
    let total = agentDefs.length;
    for(const def of agentDefs){
      const st = agentState.get(def.id);
      done += (st && (st.status==='success' || st.status==='failed')) ? 1 : 0;
    }
    const pct = Math.round((done / total) * 100);
    globalProgress.style.width = `${pct}%`;
  }

  function runPipeline(){
    // Create agent cards
    for(const def of agentDefs) createAgentCard(def);

    // Simple dependency scheduler
    const idToDef = new Map(agentDefs.map(d => [d.id, d]));
    const pending = new Set(agentDefs.map(d => d.id));
    const completed = new Set();

    const fast = fastMode.checked;
    const accel = fast ? 0.45 : 1.0;

    const tryStartAgents = ()=>{
      for(const id of Array.from(pending)){
        const def = idToDef.get(id);
        const deps = def.dependsOn || [];
        const ready = deps.every(d => completed.has(d));
        if(!ready) continue;

        // Start agent
        startAgent(def, accel);
        pending.delete(id);
      }
    };

    function startAgent(def, accel){
      setAgentStatus(def.id, 'running');
      logToAgent(def.id, 'status=started');

      // Generate logs
      const makeLogs = typeof def.logs === 'function' ? def.logs(ctx) : def.logs || [];
      let offset = 200 * accel;
      makeLogs.forEach(line=>{
        const t = setTimeout(()=> logToAgent(def.id, line), offset);
        timers.push(t);
        offset += rand(200, 450) * accel;
      });

      // Finish
      const duration = Math.max(400, Math.floor(def.duration * accel));
      const t = setTimeout(()=>{
        // Special side effects
        if(def.id==='provision'){
          // create account ID if not created
          if(!ctx.accountId){
            ctx.accountId = `CHK-${rand(100,999)}-${rand(1000,9999)}`;
          }
        }

        setAgentStatus(def.id, 'success');
        logToAgent(def.id, 'status=completed');
        completed.add(def.id);
        computeProgress();
        tryStartAgents();

        // When last completes, summarize
        if(completed.size === agentDefs.length){
          resultSummary.textContent = `Opened ${ctx.accountType} account ${ctx.accountId} for ${ctx.name}. Welcome email sent to ${ctx.email}.`;
        }
      }, duration);
      timers.push(t);
    }

    tryStartAgents();
  }

  function runTranscript(){
    let delay = 200;
    const fast = fastMode.checked;
    const factor = fast ? 0.45 : 1.0;

    transcriptScript.forEach((line, idx)=>{
      const base = 800 + line.text.length * 25;
      const t = setTimeout(()=>{
        appendMessage(line.speaker, line.text);
      }, delay);
      timers.push(t);

      delay += Math.min(2400, Math.floor(base * factor));
    });
  }

  function start(){
    if(running) return;
    running = true;
    startBtn.disabled = true;
    resetBtn.disabled = false;

    // Prime context from transcript (so demo stays consistent)
    ctx.name = "Jordan Lee";
    ctx.dob = "1992-08-20";
    ctx.email = "jordan.lee@example.com";
    ctx.accountType = "checking";
    ctx.accountId = `CHK-${rand(100,999)}-${rand(1000,9999)}`;

    runTranscript();
    // Stagger starting the pipeline while IVR acknowledges
    const t = setTimeout(runPipeline, fastMode.checked ? 300 : 900);
    timers.push(t);
  }

  startBtn.addEventListener('click', start);
  resetBtn.addEventListener('click', resetUI);

  // Initialize
  resetUI();
})();