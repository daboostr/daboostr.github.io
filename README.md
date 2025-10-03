<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DaBoostR - Developer Portfolio</title>
  <style>
    /* CSS Reset and Base Styles */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      --primary-color: #0066cc;
      --secondary-color: #004499;
      --accent-color: #00aaff;
      --text-light: #ffffff;
      --text-muted: #b0b0b0;
      --text-dark: #1a1a1a;
      --bg-dark: #0f0f0f;
      --bg-light: #fafafa;
      --border-color: #404040;
      --shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    html {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      scroll-behavior: smooth;
    }

    body {
      background: var(--bg-dark);
      color: var(--text-light);
      overflow-x: hidden;
    }

    /* Skip Link for Accessibility */
    .skip-link {
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--primary-color);
      color: white;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1000;
    }
    .skip-link:focus {
      top: 6px;
    }

    /* Site Header */
    .site-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(15, 15, 15, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-color);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      font-size: 1.25rem;
    }

    .logo {
      font-size: 1.5rem;
      color: var(--accent-color);
    }

    .site-title {
      color: var(--text-light);
    }

    /* Navigation */
    .main-nav ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .main-nav a {
      color: var(--text-muted);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .main-nav a:hover {
      color: var(--accent-color);
    }

    /* Theme Toggle */
    .theme-toggle {
      background: none;
      border: 1px solid var(--border-color);
      color: var(--text-light);
      padding: 0.5rem;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    .theme-toggle:hover {
      border-color: var(--accent-color);
    }

    /* Mobile Navigation Toggle */
    .nav-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .nav-toggle .bar {
      width: 25px;
      height: 3px;
      background: var(--text-light);
      margin: 3px 0;
      transition: 0.3s;
      border-radius: 2px;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    /* Main Content */
    main {
      margin-top: 80px;
    }

    /* Modern Hero Section */
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4rem 2rem;
      text-align: center;
      min-height: 90vh;
      background: linear-gradient(135deg, var(--bg-dark) 0%, #1a1a1a 100%);
      position: relative;
    }

    .hero-image-container {
      margin-bottom: 3rem;
      max-width: 400px;
      width: 100%;
    }

    .hero-image {
      width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    }

    .hero-content {
      max-width: 700px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, var(--text-light) 0%, var(--text-muted) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .accent {
      background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .lead {
      font-size: 1.4rem;
      color: var(--text-muted);
      margin-bottom: 2.5rem;
      line-height: 1.6;
    }

    /* Call to Action Buttons */
    .cta-group {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 2.5rem;
    }

    .btn {
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      cursor: pointer;
    }

    .btn.primary {
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      color: white;
    }

    .btn.primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 102, 204, 0.4);
    }

    .btn.ghost {
      color: var(--text-light);
      border-color: var(--border-color);
      background: transparent;
    }

    .btn.ghost:hover {
      border-color: var(--accent-color);
      color: var(--accent-color);
      background: rgba(0, 170, 255, 0.1);
    }

    .btn.accent {
      background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
      color: white;
    }

    /* Meta Badges */
    .meta-badges {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .badge {
      padding: 0.75rem 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 25px;
      font-size: 0.9rem;
      color: var(--text-muted);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Scroll Indicator */
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .mouse {
      width: 24px;
      height: 40px;
      border: 2px solid var(--text-muted);
      border-radius: 12px;
      position: relative;
    }

    .wheel {
      width: 4px;
      height: 8px;
      background: var(--text-muted);
      border-radius: 2px;
      margin: 6px auto;
      animation: scroll 2s infinite;
    }

    @keyframes scroll {
      0%, 20% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(16px); opacity: 0; }
    }

    /* Section Styling */
    section {
      padding: 5rem 2rem;
    }

    section h2 {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 3rem;
      color: var(--text-light);
    }

    /* Demo Section */
    .demos {
      background: var(--bg-light);
      color: var(--text-dark);
    }

    .demos h2 {
      color: var(--text-dark);
    }

    /* Project Cards */
    .project-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .project-card {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      box-shadow: var(--shadow);
      transition: all 0.3s ease;
      border: 1px solid #e5e7eb;
    }

    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    }

    .project-card h3 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .project-card h3 a {
      color: var(--primary-color);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .project-card h3 a:hover {
      color: var(--accent-color);
    }

    .project-card p {
      color: #6b7280;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .project-card footer {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .tag {
      padding: 0.5rem 1rem;
      background: #e0f2fe;
      color: var(--primary-color);
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }

    .tag.outline {
      background: transparent;
      border: 2px solid var(--primary-color);
    }

    /* Features Grid */
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature {
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }

    .feature h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      color: var(--accent-color);
    }

    .feature p {
      color: var(--text-muted);
      line-height: 1.7;
    }

    /* Stack List */
    .stack-list {
      list-style: none;
      max-width: 800px;
      margin: 0 auto;
    }

    .stack-list li {
      background: rgba(255, 255, 255, 0.05);
      margin: 1rem 0;
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stack-list strong {
      color: var(--accent-color);
    }

    /* More Note */
    .more-note {
      text-align: center;
      margin-top: 2rem;
      color: var(--text-muted);
    }

    .more-note a {
      color: var(--accent-color);
      text-decoration: none;
    }

    /* Footer */
    .site-footer {
      background: #0a0a0a;
      text-align: center;
      padding: 2rem;
      color: var(--text-muted);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .site-header {
        padding: 1rem;
      }

      .main-nav ul {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        background: rgba(15, 15, 15, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 2rem;
        transform: translateY(-100%);
        transition: transform 0.3s ease;
        border-bottom: 1px solid var(--border-color);
      }

      .main-nav ul.open {
        transform: translateY(0);
      }

      .nav-toggle {
        display: flex;
      }

      .hero {
        padding: 2rem 1rem;
        min-height: 70vh;
      }

      .hero-image-container {
        max-width: 300px;
        margin-bottom: 2rem;
      }

      .cta-group {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 100%;
        max-width: 280px;
      }

      section {
        padding: 3rem 1rem;
      }

      .project-list {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .project-card {
        padding: 1.5rem;
      }
    }

    /* Light Theme */
    [data-theme="light"] {
      --text-light: #1a1a1a;
      --text-muted: #666666;
      --bg-dark: #ffffff;
      --bg-light: #f8fafc;
      --border-color: #e5e7eb;
    }

    [data-theme="light"] .site-header {
      background: rgba(255, 255, 255, 0.95);
      border-bottom-color: #e5e7eb;
    }

    [data-theme="light"] .hero {
      background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    }

    [data-theme="light"] .feature {
      background: rgba(0, 0, 0, 0.02);
      border-color: rgba(0, 0, 0, 0.1);
    }

    [data-theme="light"] .stack-list li {
      background: rgba(0, 0, 0, 0.02);
      border-color: rgba(0, 0, 0, 0.1);
    }

    [data-theme="light"] .badge {
      background: rgba(0, 0, 0, 0.05);
      border-color: rgba(0, 0, 0, 0.1);
    }

    [data-theme="light"] .site-footer {
      background: #f8fafc;
      border-top-color: #e5e7eb;
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
        <li><a href="#demos">Demos</a></li>
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
      <div class="hero-image-container">
        <img
          src="assets/centerpiece.gif"
          alt="Animated developer character"
          class="hero-image"
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
        <div class="meta-badges">
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
