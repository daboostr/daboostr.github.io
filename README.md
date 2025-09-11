<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>DaBoostR | Developer Hub</title>
  <meta name="description" content="DaBoostR developer site: projects, tools, experiments, and insights." />
  <meta name="color-scheme" content="dark light">
  <link rel="preload" as="image" href="assets/centerpiece.gif">
  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <style>
    :root {
      --font-sans: system-ui,-apple-system,Segoe UI,Roboto,Inter,Ubuntu,sans-serif;
      --font-mono: ui-monospace,Menlo,Consolas,monospace;
      --color-bg: #0f1115;
      --color-bg-alt: #181c22;
      --color-surface: #1f252d;
      --color-border: #2e3742;
      --color-accent: #4fc3f7;
      --color-accent-alt: #ffcc66;
      --color-text: #e6eaef;
      --color-text-dim: #9ca7b5;
      --color-danger: #ff5f56;
      --gradient-hero: radial-gradient(circle at 30% 35%, #1d2732 0%, #0f1115 60%);
      --shadow-sm: 0 2px 4px -1px rgba(0,0,0,.4);
      --shadow-md: 0 4px 18px -2px rgba(0,0,0,.5);
      --radius-sm: 4px;
      --radius-md: 10px;
      --radius-full: 999px;
      --space-xs: clamp(.25rem,.4vw,.45rem);
      --space-sm: clamp(.5rem,.6vw,.75rem);
      --space-md: clamp(.9rem,1.1vw,1.25rem);
      --space-lg: clamp(1.4rem,1.8vw,2rem);
      --space-xl: clamp(2rem,3vw,3.5rem);
      --transition: 160ms cubic-bezier(.4,0,.2,1);
    }
    [data-theme="light"] {
      --color-bg: #f5f7fa;
      --color-bg-alt: #eef2f6;
      --color-surface: #ffffff;
      --color-border: #d3d9e2;
      --color-text: #1e242b;
      --color-text-dim: #5a6572;
      --gradient-hero: radial-gradient(circle at 30% 35%, #ffffff 0%, #e6ecf2 70%);
      --shadow-md: 0 4px 18px -3px rgba(0,0,0,.18);
    }
    * { box-sizing: border-box; min-width:0; }
    html { scroll-behavior:smooth; }
    body {
      margin:0;
      font-family:var(--font-sans);
      font-size:clamp(16px,1.05vw,18px);
      line-height:1.5;
      background:var(--color-bg);
      color:var(--color-text);
      -webkit-font-smoothing:antialiased;
    }
    img { max-width:100%; display:block; }
    h1,h2,h3 { line-height:1.15; font-weight:600; letter-spacing:-0.02em; margin:0 0 var(--space-md); }
    p { margin:0 0 var(--space-md); }
    a { color:var(--color-accent); text-decoration:none; transition:color var(--transition); }
    a:hover,a:focus-visible { color:var(--color-accent-alt); }
    .skip-link {
      position:absolute; left:-999px; top:0; background:var(--color-accent);
      color:#031019; padding:var(--space-xs) var(--space-sm); border-radius:var(--radius-sm); z-index:1000;
    }
    .skip-link:focus { left:var(--space-sm); }
    .site-header {
      position:sticky; top:0; display:flex; align-items:center; justify-content:space-between;
      gap:var(--space-md); padding:var(--space-sm) clamp(1rem,4vw,3rem);
      backdrop-filter:blur(12px);
      background:color-mix(in srgb, var(--color-bg) 86%, transparent);
      border-bottom:1px solid var(--color-border); z-index:50;
    }
    .brand { display:flex; align-items:center; gap:.55rem; font-weight:600; font-size:1.05rem; }
    .logo { font-size:1.4rem; }
    .main-nav ul {
      list-style:none; display:flex; gap:clamp(.75rem,1.2vw,1.5rem);
      margin:0; padding:0; align-items:center;
    }
    .main-nav a {
      position:relative; padding:.35rem .55rem; border-radius:var(--radius-sm);
      font-weight:500; color:var(--color-text-dim);
    }
    .main-nav a:hover,.main-nav a:focus-visible {
      color:var(--color-text); background:var(--color-surface);
    }
    .nav-toggle {
      display:none; flex-direction:column; gap:4px; background:none; border:none;
      cursor:pointer; padding:.5rem; border-radius:var(--radius-sm);
    }
    .nav-toggle:focus-visible { outline:2px solid var(--color-accent); outline-offset:2px; }
    .nav-toggle .bar { width:22px; height:2px; background:var(--color-text); border-radius:2px; }
    .theme-toggle {
      background:var(--color-surface); border:1px solid var(--color-border);
      color:var(--color-text); padding:.4rem .7rem; cursor:pointer; border-radius:var(--radius-full);
      display:flex; align-items:center; font-size:.9rem; transition:background var(--transition), border-color var(--transition);
    }
    .theme-toggle:hover { background:var(--color-bg-alt); border-color:var(--color-accent); }
    .hero {
      position:relative; min-height:clamp(600px,90vh,880px);
      display:grid; gap:clamp(1.5rem,3vw,3rem); grid-template-columns:minmax(0,1fr) minmax(0,1fr);
      align-items:center;
      padding:clamp(2.2rem,5vw,5rem) clamp(1.2rem,5vw,4.5rem) clamp(3rem,6vh,4.5rem);
      background:var(--gradient-hero); overflow:hidden;
    }
    .hero:before,.hero:after {
      content:""; position:absolute; inset:0;
      background:radial-gradient(circle at 80% 75%, rgba(79,195,247,.12), transparent 60%),
                 radial-gradient(circle at 15% 25%, rgba(255,204,102,.10), transparent 55%);
      pointer-events:none; mix-blend-mode:screen;
    }
    .hero-media { position:relative; display:flex; justify-content:center; align-items:center; order:1; }
    .hero-gif {
      width:min(100%, 620px); max-height:70vh; object-fit:contain; aspect-ratio:1/1;
      border-radius:clamp(10px,1.8vw,26px);
      box-shadow:0 10px 28px -6px rgba(0,0,0,.55), 0 4px 12px -2px rgba(0,0,0,.35);
      border:1px solid color-mix(in srgb,var(--color-border),transparent 30%);
      background:#000; animation:float 6.5s ease-in-out infinite;
    }
    @media (prefers-reduced-motion: reduce) { .hero-gif { animation:none; } }
    @keyframes float { 0%,100% { transform:translateY(-4px);} 50% { transform:translateY(6px);} }
    .hero-content { max-width:640px; order:2; }
    .hero h1 { font-size:clamp(2.35rem,5.1vw,4.2rem); font-weight:650; }
    .lead { font-size:clamp(1.05rem,1.4vw,1.3rem); max-width:48ch; color:var(--color-text-dim); }
    .accent {
      background:linear-gradient(90deg,var(--color-accent),var(--color-accent-alt));
      -webkit-background-clip:text; color:transparent;
    }
    .cta-group { display:flex; flex-wrap:wrap; gap:var(--space-sm); margin:var(--space-lg) 0 var(--space-md); }
    .btn {
      --btn-bg:var(--color-surface); --btn-border:var(--color-border); --btn-color:var(--color-text);
      font:inherit; text-decoration:none; display:inline-flex; align-items:center; gap:.5rem;
      padding:.75rem 1.15rem; border:1px solid var(--btn-border); background:var(--btn-bg); color:var(--btn-color);
      border-radius:var(--radius-sm); font-weight:500; letter-spacing:.25px; position:relative;
      overflow:hidden; transition:background var(--transition), border-color var(--transition), transform var(--transition);
      cursor:pointer;
    }
    .btn.primary { --btn-bg:linear-gradient(145deg,var(--color-accent) 0%, var(--color-accent-alt) 90%); --btn-border:transparent; --btn-color:#031019; font-weight:600; }
    .btn.accent { --btn-bg:var(--color-accent); --btn-color:#031019; font-weight:600; border:none; }
    .btn.ghost { background:transparent; border-color:var(--color-border); }
    .btn:hover,.btn:focus-visible { transform:translateY(-2px); box-shadow:var(--shadow-sm); }
    .btn:active { transform:translateY(0); }
    .meta-badges { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:var(--space-md); }
    .badge {
      background:var(--color-surface); color:var(--color-text-dim); padding:.4rem .7rem;
      border-radius:var(--radius-full); font-size:.7rem; letter-spacing:.5px; text-transform:uppercase;
      border:1px solid var(--color-border);
    }
    .scroll-indicator {
      position:absolute; left:50%; bottom:1.25rem; transform:translateX(-50%);
      display:flex; flex-direction:column; align-items:center; font-size:.7rem; font-weight:500; letter-spacing:2px; opacity:.75;
    }
    .scroll-indicator span { margin-bottom:.25rem; color:var(--color-text-dim); }
    .mouse {
      width:26px; height:42px; border:2px solid var(--color-text-dim); border-radius:14px;
      position:relative; display:flex; align-items:flex-start; justify-content:center; padding-top:4px;
    }
    .mouse .wheel {
      width:4px; height:8px; background:var(--color-text-dim); border-radius:2px; animation:wheel 2.4s ease-in-out infinite;
    }
    @keyframes wheel { 0% {transform:translateY(0);opacity:.9;} 70% {transform:translateY(12px);opacity:.15;} 100% {transform:translateY(0);opacity:.9;} }
    section { padding:clamp(3rem,6vw,5rem) clamp(1.25rem,5.5vw,4.5rem); }
    .features { background:linear-gradient(180deg,var(--color-bg-alt) 0%, var(--color-bg) 100%); }
    .feature-grid {
      display:grid; gap:var(--space-md); grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
      margin-top:var(--space-lg);
    }
    .feature {
      background:var(--color-surface); padding:var(--space-lg) var(--space-md); border-radius:var(--radius-md);
      position:relative; overflow:hidden; border:1px solid var(--color-border);
      transition:border-color var(--transition), transform var(--transition);
    }
    .feature:before {
      content:""; position:absolute; inset:0; background:linear-gradient(145deg, rgba(255,255,255,.05), transparent 60%);
      opacity:0; transition:opacity var(--transition);
    }
    .feature:hover { transform:translateY(-4px); border-color:var(--color-accent); }
    .feature:hover:before { opacity:1; }
    .projects { background:var(--color-bg); }
    .project-list {
      display:grid; gap:clamp(1rem,1.8vw,1.6rem);
      grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
      margin-top:var(--space-lg);
    }
    .project-card {
      display:flex; flex-direction:column; background:var(--color-surface); border:1px solid var(--color-border);
      border-radius:var(--radius-md); padding:var(--space-md) var(--space-md) calc(var(--space-md) - .25rem);
      min-height:200px; position:relative;
      transition:border-color var(--transition), transform var(--transition), box-shadow var(--transition);
    }
    .project-card:hover { transform:translateY(-4px); border-color:var(--color-accent); box-shadow:var(--shadow-md); }
    .project-card.pending { opacity:.82; }
    .project-card h3 { margin:0 0 .5rem; font-size:1.05rem; }
    .project-card p { font-size:.9rem; color:var(--color-text-dim); margin-bottom:1.25rem; }
    .project-card footer { margin-top:auto; display:flex; gap:.5rem; flex-wrap:wrap; }
    .tag {
      font-size:.65rem; padding:.35rem .55rem; letter-spacing:.5px; text-transform:uppercase;
      border-radius:var(--radius-full); background:var(--color-bg-alt); color:var(--color-text-dim);
      border:1px solid var(--color-border);
    }
    .tag.outline { background:transparent; border-style:dashed; }
    .more-note { margin-top:var(--space-md); font-size:.9rem; color:var(--color-text-dim); }
    .stack-list {
      list-style:none; padding:0; margin:var(--space-lg) 0 0; display:grid; gap:.85rem; max-width:880px;
    }
    .stack-list li {
      background:var(--color-surface); padding:.9rem 1.1rem; border:1px solid var(--color-border);
      border-radius:var(--radius-sm); font-size:.9rem; line-height:1.4;
    }
    .contact { text-align:center; background:linear-gradient(165deg,var(--color-bg-alt) 0%, var(--color-bg) 80%); }
    .contact p { max-width:640px; margin-inline:auto; color:var(--color-text-dim); font-size:1rem; }
    .site-footer {
      text-align:center; padding:2.5rem 1rem 3rem; font-size:.75rem; color:var(--color-text-dim);
      background:var(--color-bg); border-top:1px solid var(--color-border);
    }
    .sr-only {
      position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden;
      clip:rect(0 0 0 0); white-space:nowrap; border:0;
    }
    @media (max-width:1020px) {
      .hero { grid-template-columns:1fr; text-align:center; }
      .hero-content { order:1; margin-inline:auto; }
      .hero-media { order:2; }
      .meta-badges { justify-content:center; }
      .cta-group { justify-content:center; }
    }
    @media (max-width:760px) {
      .main-nav ul {
        position:absolute; top:100%; right:0; flex-direction:column;
        padding:1rem 1.2rem 1.25rem; background:var(--color-bg-alt);
        border:1px solid var(--color-border); border-radius:var(--radius-md);
        margin-top:.6rem; box-shadow:var(--shadow-md); min-width:200px; display:none;
      }
      .main-nav ul.open { display:flex; }
      .nav-toggle { display:flex; }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header" role="banner">
    <div class="brand">
      <span class="logo" aria-hidden="true">⚡</span>
      <span class="site-title">DaBoostR</span>
    </div>
    <nav class="main-nav" aria-label="Primary">
      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navMenu">
        <span class="bar"></span><span class="bar"></span><span class="bar"></span>
        <span class="sr-only">Menu</span>
      </button>
      <ul id="navMenu">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#features">Highlights</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button id="themeToggle" class="theme-toggle" aria-label="Toggle color theme">
            <span class="theme-icon" data-icon-light="🌞" data-icon-dark="🌜">🌜</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="hero">
      <div class="hero-media">
        <img
          src="assets/centerpiece.gif"
          alt="Animated character"
          class="hero-gif"
          decoding="async"
          fetchpriority="high"
        />
      </div>
      <div class="hero-content">
        <h1>
          Crafting <span class="accent">Efficient</span><br />
          Developer Experiences
        </h1>
        <p class="lead">
          Experiments, tooling, performance techniques, and practical engineering practices—shared openly.
        </p>
        <div class="cta-group">
          <a class="btn primary" href="#projects">Explore Projects</a>
            <a class="btn ghost" href="https://github.com/daboostr" target="_blank" rel="noopener">GitHub Profile →</a>
        </div>
        <div class="meta-badges" aria-label="Site traits">
          <span class="badge">Open Source Focus</span>
          <span class="badge">Performance Minded</span>
          <span class="badge">Continuous Learning</span>
        </div>
      </div>
      <div class="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </section>

    <section class="features" id="features" aria-labelledby="features-title">
      <h2 id="features-title">What You’ll Find</h2>
      <div class="feature-grid">
        <article class="feature">
          <h3>Optimized Patterns</h3>
          <p>Code snippets and approaches refined for clarity, performance, and maintainability.</p>
        </article>
        <article class="feature">
          <h3>Automation & Tooling</h3>
          <p>Dev environment improvements, scripts, and workflow enhancers.</p>
        </article>
        <article class="feature">
          <h3>Technical Notes</h3>
          <p>Concise write‑ups on experiments, debugging sessions, and architectural tradeoffs.</p>
        </article>
        <article class="feature">
          <h3>Incremental Evolution</h3>
          <p>Shipping small, measurable improvements—not overengineering.</p>
        </article>
      </div>
    </section>

    <section class="projects" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Highlighted Projects</h2>
      <div class="project-list">
        <article class="project-card">
          <div class="project-body">
            <h3><a href="https://github.com/daboostr/daboostr.github.io">Developer Site</a></h3>
            <p>Source for this site. Structured for fast iteration and clean progressive enhancements.</p>
          </div>
          <footer>
            <span class="tag">Site</span>
            <span class="tag">Responsive</span>
          </footer>
        </article>
        <article class="project-card">
          <div class="project-body">
            <h3><a href="https://github.com/daboostr/CRMComparer">CRMComparer</a></h3>
            <p>Utility for comparing CRM datasets with clarity and reproducibility.</p>
          </div>
          <footer>
            <span class="tag">Data</span>
            <span class="tag">CLI</span>
          </footer>
        </article>
        <article class="project-card pending">
          <div class="project-body">
            <h3>Performance Lab</h3>
            <p>Planned micro-benchmarks and profiling harnesses for JS and backend scenarios.</p>
          </div>
          <footer>
            <span class="tag outline">Coming Soon</span>
          </footer>
        </article>
      </div>
      <p class="more-note">More repositories on <a href="https://github.com/daboostr" target="_blank" rel="noopener">GitHub</a>.</p>
    </section>

    <section class="stack" id="stack" aria-labelledby="stack-title">
      <h2 id="stack-title">Preferred Stack & Themes</h2>
      <ul class="stack-list">
        <li><strong>Languages:</strong> TypeScript, JavaScript, Python</li>
        <li><strong>Front-End:</strong> Semantic HTML, Modern CSS (Grid/Flex), Progressive Enhancement</li>
        <li><strong>Build Philosophy:</strong> Lean, minimal dependencies, performance-first</li>
        <li><strong>Tooling:</strong> GitHub Actions, CLI scripts, static site workflows</li>
      </ul>
    </section>

    <section class="contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Get In Touch</h2>
      <p>
        Have an idea, suggestion, or want to collaborate? Open an issue in a repo or connect via GitHub.
      </p>
      <a class="btn accent" href="https://github.com/daboostr" target="_blank" rel="noopener">Connect on GitHub</a>
    </section>
  </main>

  <footer class="site-footer">
    <p>&copy; <span id="year"></span> DaBoostR. All rights reserved.</p>
  </footer>

  <script>
  (function() {
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const yearEl = document.getElementById('year');
    const THEME_KEY = 'site-theme';

    function setTheme(mode) {
      root.setAttribute('data-theme', mode);
      themeIcon.textContent = mode === 'light'
        ? themeIcon.dataset.iconLight
        : themeIcon.dataset.iconDark;
      try { localStorage.setItem(THEME_KEY, mode); } catch(_) {}
    }

    function initTheme() {
      let stored;
      try { stored = localStorage.getItem(THEME_KEY); } catch(_) {}
      if (stored) {
        setTheme(stored);
      } else {
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        setTheme(prefersLight ? 'light' : 'dark');
      }
    }

    themeToggle?.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });

    navToggle?.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open', !expanded);
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded','false');
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded','false');
        navToggle.focus();
      }
    });

    yearEl.textContent = new Date().getFullYear();
    initTheme();
  })();
  </script>
</body>
</html>
