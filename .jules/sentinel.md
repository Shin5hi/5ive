## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2025-05-15 - Hardened CSP and Externalized Assets
**Vulnerability:** Dependency on `'unsafe-inline'` in CSP and use of inline event handlers.
**Learning:** Hardening CSP by removing `'unsafe-inline'` requires complete externalization of CSS and JS. Additionally, Playwright verification scripts using string-based `wait_for_function` or `evaluate` can trigger CSP `unsafe-eval` violations if `script-src` is strictly set to `'self'`.
**Prevention:** Favor external assets and `addEventListener` for all interactive elements. Use Playwright's native `expect` assertions instead of string-based evaluation to ensure test compatibility with strict CSPs.
