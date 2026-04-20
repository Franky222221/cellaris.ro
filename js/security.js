/**
 * CELLARIS — security.js
 * Client-side security layer: rate limiting, bot detection,
 * honeypot, input sanitization, CSRF token, XSS guards.
 */

'use strict';

/* ── CSRF TOKEN ────────────────────────────────────────── */
const CSRF = (function () {
  function generate() {
    const arr = new Uint8Array(24);
    crypto.getRandomValues(arr);
    return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
  }

  function get() {
    let token = sessionStorage.getItem('csrf_token');
    if (!token) {
      token = generate();
      sessionStorage.setItem('csrf_token', token);
    }
    return token;
  }

  /* Inject hidden CSRF field into every form */
  function injectForms() {
    const token = get();
    document.querySelectorAll('form').forEach(form => {
      if (form.querySelector('[name="_csrf"]')) return;
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = '_csrf';
      input.value = token;
      form.appendChild(input);
    });
  }

  return { get, injectForms };
})();

/* ── INPUT SANITIZER ───────────────────────────────────── */
const Sanitize = (function () {
  const entityMap = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;',
    '"': '&quot;', "'": '&#x27;', '/': '&#x2F;',
  };

  function escapeHtml(str) {
    return String(str).replace(/[&<>"'/]/g, s => entityMap[s]);
  }

  function stripTags(str) {
    return String(str).replace(/<[^>]*>/g, '');
  }

  function sanitizeInput(str, opts = {}) {
    let out = String(str).trim();
    out = stripTags(out);
    if (!opts.allowHtml) out = escapeHtml(out);
    if (opts.maxLength) out = out.slice(0, opts.maxLength);
    return out;
  }

  return { escapeHtml, stripTags, sanitize: sanitizeInput };
})();

/* ── RATE LIMITER (in-memory, per session) ─────────────── */
const RateLimit = (function () {
  const store = {};

  /**
   * @param {string} key  — unique identifier (e.g. 'contact-form')
   * @param {number} max  — max attempts
   * @param {number} windowMs — time window in ms
   */
  function check(key, max = 5, windowMs = 60000) {
    const now = Date.now();
    if (!store[key]) store[key] = [];

    /* Remove expired entries */
    store[key] = store[key].filter(t => now - t < windowMs);

    if (store[key].length >= max) return false;

    store[key].push(now);
    return true;
  }

  return { check };
})();

/* ── BOT DETECTION ─────────────────────────────────────── */
const BotDetect = (function () {
  let humanSignals = 0;
  const MIN_SIGNALS = 3;

  /* Count genuine user interactions */
  ['mousemove', 'keydown', 'touchstart', 'scroll'].forEach(event => {
    window.addEventListener(event, () => { humanSignals++; }, { passive: true, once: false });
  });

  function isHuman() {
    return humanSignals >= MIN_SIGNALS;
  }

  /* Timing check: real users don't submit forms in < 2 seconds */
  const formTimestamps = new WeakMap();

  function stampForm(form) {
    formTimestamps.set(form, Date.now());
  }

  function isTooFast(form, minMs = 2000) {
    const ts = formTimestamps.get(form);
    if (!ts) return true;
    return Date.now() - ts < minMs;
  }

  return { isHuman, stampForm, isTooFast };
})();

/* ── FORM SECURITY LAYER ───────────────────────────────── */
(function secureAllForms() {
  const RATE_KEY = 'form-submit';
  const MAX_SUBMISSIONS = 5;
  const WINDOW_MS = 300000; /* 5 minutes */

  document.querySelectorAll('form').forEach(form => {
    /* Stamp when form becomes interactive */
    form.addEventListener('focusin', () => BotDetect.stampForm(form), { once: true });

    form.addEventListener('submit', (e) => {
      /* 1. Honeypot */
      const honey = form.querySelector('.form-honey input');
      if (honey && honey.value.length > 0) {
        e.preventDefault();
        return;
      }

      /* 2. Bot timing check */
      if (BotDetect.isTooFast(form, 1500)) {
        e.preventDefault();
        return;
      }

      /* 3. Human signals */
      if (!BotDetect.isHuman()) {
        e.preventDefault();
        return;
      }

      /* 4. Rate limiting */
      if (!RateLimit.check(RATE_KEY, MAX_SUBMISSIONS, WINDOW_MS)) {
        e.preventDefault();
        const statusEl = form.querySelector('.form-status');
        if (statusEl) {
          statusEl.textContent = 'Prea multe încercări. Vă rugăm să reveniți în câteva minute sau să ne contactați telefonic.';
          statusEl.dataset.state = 'err';
        }
        return;
      }

      /* 5. Basic input sanitization for text fields */
      form.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(field => {
        field.value = Sanitize.sanitize(field.value, { maxLength: 2000 });
      });
    });
  });

  /* Inject CSRF tokens after DOM ready */
  CSRF.injectForms();
})();

/* ── CLICK-JACKING GUARD ───────────────────────────────── */
(function preventClickjacking() {
  if (window.self !== window.top) {
    document.documentElement.style.visibility = 'hidden';
    /* Allow the server's X-Frame-Options / CSP frame-ancestors to handle this,
       but add JS defense in case headers are missing */
    try { window.top.location = window.self.location; } catch (_) {}
  }
})();

/* ── EXTERNAL LINK SAFETY ──────────────────────────────── */
(function secureExternalLinks() {
  document.querySelectorAll('a[href^="http"]').forEach(a => {
    try {
      const url = new URL(a.href);
      if (url.hostname !== location.hostname) {
        a.setAttribute('rel', 'noopener noreferrer');
        if (!a.hasAttribute('target')) {
          a.setAttribute('target', '_blank');
        }
      }
    } catch (_) {}
  });
})();

/* ── CONSOLE WARNING ───────────────────────────────────── */
(function consoleWarning() {
  const style = [
    'color: #1B3A2D',
    'background: #F4EFE4',
    'font-size: 14px',
    'font-weight: bold',
    'padding: 8px 16px',
    'border-radius: 4px',
  ].join(';');

  console.log('%c⚠️ CELLARIS Security Notice', style);
  console.log(
    'Această consolă este destinată exclusiv dezvoltatorilor. ' +
    'Nu introduceți cod necunoscut în această consolă — poate compromite securitatea sesiunii dumneavoastră.'
  );
})();

/* ── EXPORT (for use in other modules if needed) ─────── */
window.__CELLARIS_SECURITY__ = { CSRF, Sanitize, RateLimit, BotDetect };
