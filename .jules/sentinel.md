## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2026-04-05 - Privacy & CSP Hardening
**Vulnerability:** Information leakage via Referer headers and broad CSP.
**Learning:** Static sites can leak internal URL structures or sensitive data via Referer headers to external sites. A broad CSP increases the attack surface for object-based or base-URI injection attacks.
**Prevention:** Always implement a `no-referrer` policy and use restrictive CSP directives like `object-src 'none'` and `base-uri 'self'` by default.
