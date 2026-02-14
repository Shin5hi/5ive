## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.
