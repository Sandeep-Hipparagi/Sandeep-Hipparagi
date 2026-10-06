/**
 * Sandeep Hipparagi — AI Systems & Research Portfolio
 * Interactive Architecture Simulator, Copy Handlers & UI Behaviors
 */

(() => {
  // Web Audio Context for tactile synthesized micro-sounds
  let audioCtx = null;
  let soundEnabled = true;

  const initAudio = () => {
    try {
      if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioClass();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    } catch (e) {
      // Audio autoplay policy or failure fallback
    }
  };

  const playClick = (freq = 800, type = 'sine', duration = 0.04) => {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Graceful fallback
    }
  };

  // Sound Toggle Button
  const audioToggleBtn = document.getElementById('sim-audio-toggle');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      audioToggleBtn.setAttribute('aria-pressed', soundEnabled ? 'true' : 'false');
      const label = audioToggleBtn.querySelector('.audio-label');
      if (label) label.textContent = soundEnabled ? 'sfx: on' : 'sfx: off';
      if (soundEnabled) playClick(1200, 'triangle', 0.05);
    });
  }

  // ============================================================
  // Interactive Agent Dispatch & Self-Healing Simulator
  // ============================================================
  const simSteps = document.querySelectorAll('.sim-step');
  const simRunBtn = document.getElementById('sim-run-btn');
  const simFailBtn = document.getElementById('sim-fail-btn');
  const simResetBtn = document.getElementById('sim-reset-btn');
  const simStatus = document.getElementById('sim-status-text');

  let activeTimers = [];
  let isRunning = false;

  const clearAllTimers = () => {
    activeTimers.forEach(id => clearTimeout(id));
    activeTimers = [];
  };

  const resetSimulator = () => {
    clearAllTimers();
    isRunning = false;
    simSteps.forEach(step => {
      step.dataset.state = 'idle';
      const ind = step.querySelector('.step-indicator');
      if (ind) ind.textContent = step.dataset.stepNum || '•';
    });
    if (simStatus) simStatus.textContent = 'ready';
    if (simRunBtn) {
      simRunBtn.disabled = false;
      simRunBtn.textContent = '▶ Run Normal Trace';
    }
    if (simFailBtn) simFailBtn.disabled = false;
  };

  const runSimulation = (mode = 'normal') => {
    if (isRunning) return;
    isRunning = true;
    clearAllTimers();
    if (simRunBtn) simRunBtn.disabled = true;
    if (simFailBtn) simFailBtn.disabled = true;
    initAudio();

    const sequence = [
      { step: 0, delay: 0, sound: 600, label: 'Ingesting query...' },
      { step: 1, delay: 500, sound: 800, label: 'Scanning PII & guardrails...' },
      { step: 2, delay: 1100, sound: 1000, label: 'Routing to Llama3-8b-Wisdom...' },
      { 
        step: 3, 
        delay: 1700, 
        sound: mode === 'fail-repair' ? 300 : 1200, 
        label: mode === 'fail-repair' ? 'Simulating node timeout & failure...' : 'Executing reasoning loop...',
        isRepair: mode === 'fail-repair'
      },
      { step: 4, delay: mode === 'fail-repair' ? 2400 : 2200, sound: 1400, label: 'Self-healing state recovery applied!' },
      { step: 5, delay: mode === 'fail-repair' ? 3000 : 2700, sound: 1600, label: '200 OK — Delivered.' }
    ];

    sequence.forEach(({ step, delay, sound, label, isRepair }, index) => {
      const timerId = setTimeout(() => {
        if (!isRunning) return;
        if (simStatus) simStatus.textContent = label;
        playClick(sound, isRepair ? 'sawtooth' : 'sine', isRepair ? 0.08 : 0.04);

        if (step > 0) {
          const prev = simSteps[step - 1];
          if (prev) {
            prev.dataset.state = prev.dataset.state === 'repair' ? 'repair' : 'success';
            const ind = prev.querySelector('.step-indicator');
            if (ind) ind.textContent = '✓';
          }
        }

        const curr = simSteps[step];
        if (curr) {
          curr.dataset.state = isRepair ? 'repair' : 'active';
          const ind = curr.querySelector('.step-indicator');
          if (ind) ind.textContent = isRepair ? '!' : '...';
        }

        if (index === sequence.length - 1) {
          const finishTimer = setTimeout(() => {
            if (!isRunning) return;
            curr.dataset.state = 'success';
            const ind = curr.querySelector('.step-indicator');
            if (ind) ind.textContent = '✓';
            if (simStatus) simStatus.textContent = mode === 'fail-repair' ? 'Self-healed & executed' : 'Execution complete';
            playClick(1800, 'triangle', 0.1);
            isRunning = false;
            if (simRunBtn) simRunBtn.disabled = false;
            if (simFailBtn) simFailBtn.disabled = false;
          }, 500);
          activeTimers.push(finishTimer);
        }
      }, delay);
      activeTimers.push(timerId);
    });
  };

  if (simRunBtn) {
    simRunBtn.addEventListener('click', () => {
      resetSimulator();
      runSimulation('normal');
    });
  }

  if (simFailBtn) {
    simFailBtn.addEventListener('click', () => {
      resetSimulator();
      runSimulation('fail-repair');
    });
  }

  if (simResetBtn) {
    simResetBtn.addEventListener('click', () => {
      resetSimulator();
      playClick(500, 'sine', 0.03);
    });
  }

  // ============================================================
  // Copy to Clipboard (Modern + Mobile-Safe Fallback)
  // ============================================================
  const legacyCopy = (text) => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '0';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, 99999);
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  };

  document.querySelectorAll('.copy[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy || '';
      let ok = false;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          ok = true;
        } catch (e) {
          ok = legacyCopy(text);
        }
      } else {
        ok = legacyCopy(text);
      }

      if (ok) {
        playClick(1400, 'sine', 0.05);
        btn.dataset.state = 'copied';
        const orig = btn.textContent;
        btn.textContent = 'copied';
        setTimeout(() => {
          btn.dataset.state = '';
          btn.textContent = orig;
        }, 1600);
      }
    });
  });

  // ============================================================
  // Category Filtering for Systems Gallery
  // ============================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playClick(900, 'sine', 0.03);
      filterBtns.forEach(b => b.dataset.active = 'false');
      btn.dataset.active = 'true';

      const filter = btn.dataset.filter || 'all';
      galleryCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ============================================================
  // Interactive System Inspection Modal (<dialog>)
  // ============================================================
  const modal = document.getElementById('system-inspect-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  const systemDetails = {
    'aware': {
      title: 'Aware.ai — Dual-Plane Local-First Inference Gateway',
      body: `
        <p><strong>Architecture:</strong> FastAPI + Ollama dual-plane inference gateway with Redis-backed state persistence.</p>
        <p><strong>Guardrails:</strong> In-flight PII masking and active hallucination filtering pipelines before context hits the model.</p>
        <p><strong>Self-Healing:</strong> Automated agent registration with dynamic health-checks, latency-optimized routing, and Docker Compose monorepo orchestration for enterprise privacy compliance.</p>
      `
    },
    'switchboard': {
      title: 'Universal AI Switchboard — Graph-Driven MCP Orchestration',
      body: `
        <p><strong>Architecture:</strong> Fully swappable "Lego Brick" agents and tools interconnected via Model Context Protocol (MCP).</p>
        <p><strong>Graph Engineering:</strong> Runtime failures are captured as state updates and rerouted through deterministic self-healing loops rather than crashing.</p>
        <p><strong>Governance:</strong> Least-privilege token scoping and mandatory Human-in-the-Loop (HitL) approval gates before infrastructure mutations can execute over the network.</p>
      `
    },
    'qa-agent': {
      title: 'Autonomous QA Agent — Self-Healing Test Lifecycle',
      body: `
        <p><strong>Architecture:</strong> Orchestration meta-agent accepting a target web URL and autonomously driving planning, test generation, execution, and self-repair.</p>
        <p><strong>Sub-Agents:</strong> Coordinates three decoupled agents (<strong>Planner</strong>, <strong>Generator</strong>, <strong>Healer</strong>) via an event-driven deterministic state graph.</p>
        <p><strong>Coverage:</strong> Features strict transition guardrails, coverage evaluation gates, and structured schema verification without human intervention between stages.</p>
      `
    },
    'nyayarakshak': {
      title: 'NyayaRakshak — Sarvam AI Cybercrime Complaint Auditor',
      body: `
        <p><strong>Statutory Compliance:</strong> Audits citizen complaints against Indian statutory frameworks, including the <strong>Bharatiya Nyaya Sanhita (BNS) 2023</strong>.</p>
        <p><strong>Stack:</strong> Built on the Sarvam stack (Aarya, Akshar) and scaled on Google Cloud Run.</p>
        <p><strong>Extraction:</strong> End-to-end OCR extraction, transactional integrity verification, and automated procedural defect reporting for legal filings.</p>
      `
    },
    'cyberguard': {
      title: 'CyberGuard 1930 — Voice-First Indic Financial Fraud Portal',
      body: `
        <p><strong>Multilingual Voice:</strong> TypeScript-based portal utilizing Sarvam AI (Saaras, Bulbul) facilitating real-time voice reporting in Indic languages.</p>
        <p><strong>Risk Engine:</strong> Automated entity extraction engine analyzing high-risk fraud signatures (APK malware, digital arrest scams) with cryptographic evidence hash validation.</p>
        <p><strong>Accessibility:</strong> Built-in senior-citizen UX modes and secure role-based access controls (RBAC) for law enforcement under Apache-2.0.</p>
      `
    },
    'edutech': {
      title: 'EduTech AI Tutor — Self-Driven Learning Portal',
      body: `
        <p><strong>Grounding:</strong> Conversational AI tutor grounded directly in real NCERT textbooks with educational diagram generation.</p>
        <p><strong>Role Portals:</strong> Dedicated interfaces for students, teachers, and parents.</p>
        <p><strong>Observability:</strong> Real-time class engagement monitors and automatic alerts for students requiring intervention.</p>
      `
    }
  };

  document.querySelectorAll('[data-inspect]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sysKey = btn.dataset.inspect;
      const data = systemDetails[sysKey];
      if (data && modal) {
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.body;
        playClick(1000, 'sine', 0.04);
        modal.showModal();
      }
    });
  });

  // Close modal when clicking outside (on backdrop)
  if (modal) {
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const inDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!inDialog) {
        modal.close();
      }
    });
  }

})();
