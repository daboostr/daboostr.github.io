<html lang="en" data-theme="dark">
<head>
  <style>
    /* Add background styling for hero section */
    .hero {
      background-image: url('assets/centerpiece.gif');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
    }
    
    /* Add overlay for better text readability */
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
    }
    
    /* Ensure content is above overlay */
    .hero-content {
      position: relative;
      z-index: 2;
    }
    
    /* Remove the original hero image */
    .hero-gif {
      display: none;
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
        <li><a href="#demos">Demos</a></li>
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
          Interactive demos, tooling experiments, and practical engineering solutions—built for real-world impact.
        </p>
        <div class="cta-group">
          <a class="btn primary" href="#demos">View Live Demos</a>
            <a class="btn ghost" href="https://github.com/daboostr" target="_blank" rel="noopener">GitHub Profile →</a>
        </div>
        <div class="meta-badges" aria-label="Site traits">
          <span class="badge">Live Demos</span>
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

    <section class="demos" id="demos" aria-labelledby="demos-title">
      <h2 id="demos-title">Live Interactive Demos</h2>
      <div class="project-list">
        <article class="project-card">
          <div class="project-body">
            <h3><a href="Demos/CopilotIVRAgents/">IVR Orchestrator Demo</a></h3>
            <p>Interactive simulation of IVR agent orchestration for bank account opening. Features real-time transcript, downstream agent coordination, and configurable workflows.</p>
          </div>
          <footer>
            <span class="tag">Interactive</span>
            <span class="tag">IVR</span>
            <span class="tag">Agent Orchestration</span>
          </footer>
        </article>
        <article class="project-card">
          <div class="project-body">
            <h3><a href="Demos/MyFam.html">MyFam - Graph API Parser</a></h3>
            <p>Visual parser for Microsoft Graph API responses. Upload JSON data to see shared files organized by people with thumbnail previews and filtering capabilities.</p>
          </div>
          <footer>
            <span class="tag">Graph API</span>
            <span class="tag">Data Visualization</span>
            <span class="tag">Microsoft</span>
          </footer>
        </article>
        <article class="project-card">
          <div class="project-body">
            <h3><a href="Demos/WF.html">Wells Fargo Bank Demo</a></h3>
            <p>Banking website mockup with integrated chatbot experience. Demonstrates customer service automation with resizable chat interface.</p>
          </div>
          <footer>
            <span class="tag">Banking</span>
            <span class="tag">Chatbot</span>
            <span class="tag">Customer Service</span>
          </footer>
        </article>
      </div>
    </section>

    <section class="features" id="features" aria-labelledby="features-title">
      <h2 id="features-title">What You'll Find</h2>
      <div class="feature-grid">
        <article class="feature">
          <h3>Interactive Prototypes</h3>
          <p>Working demos that showcase real-world scenarios with functional user interfaces and simulated workflows.</p>
        </article>
        <article class="feature">
          <h3>Automation & Tooling</h3>
          <p>Dev environment improvements, scripts, and workflow enhancers for practical development challenges.</p>
        </article>
        <article class="feature">
          <h3>Technical Experiments</h3>
          <p>Hands-on explorations of new technologies, patterns, and integration approaches.</p>
        </article>
        <article class="feature">
          <h3>Incremental Innovation</h3>
          <p>Building practical solutions that solve real problems—not overengineering for its own sake.</p>
        </article>
      </div>
    </section>

    <section class="projects" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Development Projects</h2>
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
