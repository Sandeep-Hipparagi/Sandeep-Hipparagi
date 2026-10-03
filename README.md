<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sandeep Hipparagi - AI Systems Architect</title>
  <style>
    :root {
      --hue: 35;
      --primary: #e26a3a;
      --primary-light: #f5a373;
      --dark-bg: #1a1410;
      --dark-bg-elev: #2a2320;
      --light-text: #f5f1ed;
      --light-text-soft: #b8ada3;
      --accent: #d4883e;
      --radius-md: 12px;
      --radius-lg: 18px;
      --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
      background: var(--dark-bg);
      color: var(--light-text);
      line-height: 1.6;
      background-image: 
        radial-gradient(circle at 20% 50%, rgba(226, 106, 58, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(212, 136, 62, 0.05) 0%, transparent 50%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto;
      gap: 60px;
      padding: 60px 0;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -40%;
      right: -20%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(226, 106, 58, 0.1) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 32px;
      padding: 20px 0;
      border-bottom: 1px solid rgba(212, 136, 62, 0.2);
      position: relative;
      z-index: 10;
    }

    .logo {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: -0.02em;
      color: var(--primary);
    }

    .nav-links {
      display: flex;
      gap: 32px;
      font-size: 13px;
      letter-spacing: -0.005em;
    }

    .nav-links a {
      color: var(--light-text-soft);
      text-decoration: none;
      transition: color 200ms var(--ease-out);
      cursor: pointer;
    }

    .nav-links a:hover {
      color: var(--primary);
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 80px;
      align-items: center;
      position: relative;
      z-index: 5;
    }

    .hero-text h1 {
      font-size: clamp(48px, 8vw, 76px);
      line-height: 1.1;
      letter-spacing: -0.03em;
      font-weight: 900;
      margin-bottom: 24px;
      background: linear-gradient(135deg, #f5f1ed 0%, #d4883e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-text .tagline {
      font-size: clamp(20px, 2vw, 28px);
      color: var(--light-text-soft);
      margin-bottom: 32px;
      line-height: 1.4;
      max-width: 42ch;
    }

    .hero-text .tagline em {
      color: var(--primary);
      font-style: italic;
      font-weight: 600;
    }

    .cta-group {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 14px 28px;
      border-radius: var(--radius-md);
      border: none;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: all 200ms var(--ease-out);
      letter-spacing: 0.02em;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .btn-primary {
      background: var(--primary);
      color: var(--dark-bg);
    }

    .btn-primary:hover {
      background: var(--primary-light);
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(226, 106, 58, 0.3);
    }

    .btn-secondary {
      background: transparent;
      color: var(--light-text);
      border: 1.5px solid var(--light-text-soft);
    }

    .btn-secondary:hover {
      border-color: var(--primary);
      color: var(--primary);
    }

    .hero-visual {
      position: relative;
      aspect-ratio: 1;
      background: linear-gradient(135deg, var(--dark-bg-elev) 0%, rgba(212, 136, 62, 0.1) 100%);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(212, 136, 62, 0.3);
      display: grid;
      place-items: center;
      overflow: hidden;
      transform: rotate(-2deg);
      box-shadow: 0 30px 80px -20px rgba(226, 106, 58, 0.4);
    }

    .visual-content {
      text-align: center;
      z-index: 2;
    }

    .visual-icon {
      font-size: 64px;
      margin-bottom: 16px;
    }

    .visual-text {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--accent);
      font-family: 'Courier New', monospace;
    }

    /* Section Styles */
    .section {
      padding: 100px 0;
      border-top: 1px solid rgba(212, 136, 62, 0.15);
      position: relative;
    }

    .section-header {
      margin-bottom: 60px;
    }

    .section-eyebrow {
      font-size: 12px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--primary);
      margin-bottom: 12px;
      font-weight: 600;
    }

    .section-title {
      font-size: clamp(42px, 6vw, 72px);
      line-height: 1.1;
      letter-spacing: -0.03em;
      font-weight: 900;
      margin-bottom: 24px;
    }

    .section-desc {
      font-size: 18px;
      color: var(--light-text-soft);
      max-width: 60ch;
      line-height: 1.6;
    }

    /* Core Systems Grid */
    .systems-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-top: 48px;
    }

    .system-card {
      background: linear-gradient(135deg, rgba(212, 136, 62, 0.05) 0%, transparent 100%);
      border: 1px solid rgba(212, 136, 62, 0.2);
      border-radius: var(--radius-md);
      padding: 32px;
      transition: all 300ms var(--ease-out);
      cursor: pointer;
    }

    .system-card:hover {
      border-color: var(--primary);
      background: linear-gradient(135deg, rgba(226, 106, 58, 0.1) 0%, rgba(212, 136, 62, 0.05) 100%);
      transform: translateY(-4px);
      box-shadow: 0 20px 50px rgba(226, 106, 58, 0.2);
    }

    .system-name {
      font-size: 16px;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin-bottom: 8px;
      color: var(--primary);
      font-family: 'Courier New', monospace;
    }

    .system-desc {
      font-size: 15px;
      color: var(--light-text-soft);
      line-height: 1.6;
    }

    /* Stats Section */
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 32px;
      margin-top: 48px;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      font-size: clamp(36px, 6vw, 56px);
      font-weight: 900;
      color: var(--primary);
      line-height: 1;
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 14px;
      color: var(--light-text-soft);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* Expertise Grid */
    .expertise-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin-top: 48px;
    }

    .expertise-item {
      background: rgba(212, 136, 62, 0.08);
      border-radius: var(--radius-md);
      padding: 20px;
      border: 1px solid rgba(212, 136, 62, 0.15);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .expertise-name {
      font-weight: 600;
      font-size: 14px;
    }

    .expertise-stars {
      color: var(--primary);
      font-size: 14px;
      font-weight: 600;
    }

    /* Work Grid */
    .work-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-top: 48px;
    }

    .work-card {
      background: linear-gradient(135deg, rgba(212, 136, 62, 0.08) 0%, transparent 100%);
      border: 1px solid rgba(212, 136, 62, 0.2);
      border-radius: var(--radius-md);
      padding: 28px;
      transition: all 300ms var(--ease-out);
    }

    .work-card:hover {
      border-color: var(--primary);
      transform: translateY(-4px);
      box-shadow: 0 20px 50px rgba(226, 106, 58, 0.15);
    }

    .work-title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--light-text);
    }

    .work-desc {
      font-size: 14px;
      color: var(--light-text-soft);
      line-height: 1.6;
    }

    /* CTA Section */
    .cta-section {
      background: linear-gradient(135deg, var(--dark-bg-elev) 0%, rgba(212, 136, 62, 0.1) 100%);
      border: 1px solid rgba(212, 136, 62, 0.3);
      border-radius: var(--radius-lg);
      padding: 80px 60px;
      text-align: center;
      margin: 80px 0;
    }

    .cta-section h2 {
      font-size: clamp(40px, 6vw, 64px);
      line-height: 1.2;
      letter-spacing: -0.03em;
      margin-bottom: 24px;
    }

    .cta-section p {
      font-size: 18px;
      color: var(--light-text-soft);
      margin-bottom: 40px;
      max-width: 50ch;
      margin-left: auto;
      margin-right: auto;
    }

    /* Footer */
    .footer {
      border-top: 1px solid rgba(212, 136, 62, 0.15);
      padding: 60px 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 40px;
    }

    .footer-group h3 {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--primary);
      margin-bottom: 16px;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-links a {
      color: var(--light-text-soft);
      text-decoration: none;
      font-size: 14px;
      transition: color 200ms var(--ease-out);
    }

    .footer-links a:hover {
      color: var(--primary);
    }

    .footer-bottom {
      grid-column: 1 / -1;
      text-align: center;
      padding-top: 40px;
      border-top: 1px solid rgba(212, 136, 62, 0.15);
      color: var(--light-text-soft);
      font-size: 13px;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .hero-visual {
        min-height: 300px;
      }

      .nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }

      .nav-links {
        flex-wrap: wrap;
        gap: 16px;
      }
    }

    @media (max-width: 640px) {
      .hero {
        gap: 40px;
        padding: 40px 0;
      }

      .cta-section {
        padding: 40px 24px;
      }

      .systems-grid,
      .work-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Hero Section -->
    <section class="hero">
      <nav class="nav">
        <div class="logo">/sandeep</div>
        <div class="nav-links">
          <a href="#systems">systems</a>
          <a href="#work">work</a>
          <a href="#expertise">expertise</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <div class="hero-content">
        <div class="hero-text">
          <h1>Building AI Systems <em>That Scale</em></h1>
          <p class="tagline">
            Founder @ BluePatterns AI. I architect the infrastructure that turns language models into <em>reliable, production-grade systems.</em>
          </p>
          <div class="cta-group">
            <a href="https://bluepatterns.ai/" class="btn btn-primary">
              → BluePatterns.AI
            </a>
            <a href="https://linkedin.com/in/sandeep-hipparagi" class="btn btn-secondary">
              Connect
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-content">
            <div class="visual-icon">⚡</div>
            <div class="visual-text">AI-Native<br/>Architecture</div>
          </div>
        </div>
      </div>

      <div style="text-align: center; color: var(--light-text-soft); font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;">
        Multi-Agent Routing • Inference Adaptation • Enterprise Systems
      </div>
    </section>

    <!-- Core Systems -->
    <section class="section" id="systems">
      <div class="section-header">
        <div class="section-eyebrow">Core Infrastructure</div>
        <h2 class="section-title">Systems in Production</h2>
        <p class="section-desc">
          At BluePatterns AI, I've built the foundational layers that make enterprise AI actually work.
        </p>
      </div>

      <div class="systems-grid">
        <div class="system-card">
          <div class="system-name">aware.ai</div>
          <div class="system-desc">Multi-agent routing engine with dynamic guardrail refactoring and stateful mediation</div>
        </div>
        <div class="system-card">
          <div class="system-name">A3H Harness</div>
          <div class="system-desc">Enterprise evaluation, benchmarking, and stress-testing for LLM and agent systems</div>
        </div>
        <div class="system-card">
          <div class="system-name">Awareness Augmentation</div>
          <div class="system-desc">Specialized legal inference layer with domain-specific decision trees</div>
        </div>
        <div class="system-card">
          <div class="system-name">Adapter Layer</div>
          <div class="system-desc">Middleware abstraction decoupling task inputs from model-specific inference</div>
        </div>
        <div class="system-card">
          <div class="system-name">PromptCraft</div>
          <div class="system-desc">Structured prompt generation with self-refining templates</div>
        </div>
        <div class="system-card">
          <div class="system-name">Wisdom Model</div>
          <div class="system-desc">Context distillation and higher-order reasoning abstraction</div>
        </div>
      </div>
    </section>

    <!-- Work Section -->
    <section class="section" id="work">
      <div class="section-header">
        <div class="section-eyebrow">Enterprise & Products</div>
        <h2 class="section-title">What I've Built</h2>
        <p class="section-desc">
          Production systems deployed across legal, fintech, and cybersecurity domains.
        </p>
      </div>

      <div class="work-grid">
        <div class="work-card">
          <div class="work-title">Paytm Vyapar Copilot</div>
          <div class="work-desc">Enterprise conversational AI for merchant operations at scale on Ignite platform</div>
        </div>
        <div class="work-card">
          <div class="work-title">Nyaya Rakshak</div>
          <div class="work-desc">Sovereign legal intelligence system with vernacular language support and specialized AIVAR problem-solving</div>
        </div>
        <div class="work-card">
          <div class="work-title">SwitchBoard AI</div>
          <div class="work-desc">Real-time multi-agent routing and classification system for complex task workflows</div>
        </div>
        <div class="work-card">
          <div class="work-title">CyberSaarthi</div>
          <div class="work-desc">AI-powered citizen cyber safety and advisory system deployed at scale</div>
        </div>
        <div class="work-card">
          <div class="work-title">CyberCrime Intelligence</div>
          <div class="work-desc">Forensic analytics and rapid investigation pipeline with structured reasoning</div>
        </div>
        <div class="work-card">
          <div class="work-title">Roognis AI</div>
          <div class="work-desc">Specialized AI engineering consulting for prompt optimization and model delivery</div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section">
      <div class="stats">
        <div class="stat">
          <div class="stat-number">6+</div>
          <div class="stat-label">Years Building AI</div>
        </div>
        <div class="stat">
          <div class="stat-number">15+</div>
          <div class="stat-label">Production Deployments</div>
        </div>
        <div class="stat">
          <div class="stat-number">3</div>
          <div class="stat-label">Founder Exits</div>
        </div>
        <div class="stat">
          <div class="stat-number">100%</div>
          <div class="stat-label">Uptime Focus</div>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section class="section" id="expertise">
      <div class="section-header">
        <div class="section-eyebrow">Depth & Specialization</div>
        <h2 class="section-title">Core Competencies</h2>
      </div>

      <div class="expertise-grid">
        <div class="expertise-item">
          <span class="expertise-name">Multi-Agent Systems</span>
          <span class="expertise-stars">★★★★★</span>
        </div>
        <div class="expertise-item">
          <span class="expertise-name">LLM Evaluation</span>
          <span class="expertise-stars">★★★★★</span>
        </div>
        <div class="expertise-item">
          <span class="expertise-name">Prompt Engineering</span>
          <span class="expertise-stars">★★★★★</span>
        </div>
        <div class="expertise-item">
          <span class="expertise-name">System Architecture</span>
          <span class="expertise-stars">★★★★★</span>
        </div>
        <div class="expertise-item">
          <span class="expertise-name">Legal-Tech AI</span>
          <span class="expertise-stars">★★★★★</span>
        </div>
        <div class="expertise-item">
          <span class="expertise-name">Enterprise Scaling</span>
          <span class="expertise-stars">★★★★★</span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" id="contact">
      <h2>Ready to Build Something Great?</h2>
      <p>I'm actively seeking strategic partnerships, consulting engagements, and talent collaborations.</p>
      <div class="cta-group" style="justify-content: center;">
        <a href="mailto:hipparagi95@gmail.com" class="btn btn-primary">Email Me</a>
        <a href="https://linkedin.com/in/sandeep-hipparagi" class="btn btn-secondary">LinkedIn</a>
        <a href="https://twitter.com/hipparagi_here" class="btn btn-secondary">Twitter</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-group">
        <h3>Company</h3>
        <div class="footer-links">
          <a href="https://bluepatterns.ai/">BluePatterns AI</a>
          <a href="https://github.com/Sandeep-Hipparagi">GitHub</a>
        </div>
      </div>
      <div class="footer-group">
        <h3>Connect</h3>
        <div class="footer-links">
          <a href="https://linkedin.com/in/sandeep-hipparagi">LinkedIn</a>
          <a href="https://twitter.com/hipparagi_here">Twitter</a>
          <a href="mailto:hipparagi95@gmail.com">Email</a>
        </div>
      </div>
      <div class="footer-group">
        <h3>Focus Areas</h3>
        <div class="footer-links">
          <a href="#systems">Core Systems</a>
          <a href="#work">Enterprise Work</a>
          <a href="#expertise">Expertise</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>Building production-grade AI systems that are reliable, scalable, and enterprise-ready.</p>
      </div>
    </footer>
  </div>
</body>
</html>
