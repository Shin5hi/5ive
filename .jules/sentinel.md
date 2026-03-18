## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2026-03-18 - CSP Hardening and Referrer Policy
**Vulnerability:** Weak CSP lacking `object-src` and `base-uri` directives, and missing Referrer Policy.
**Learning:** Even if no plugins or `<base>` tags are currently used, omitting these directives leaves the application vulnerable to certain types of injection and hijacking as it evolves.
**Prevention:** Always include `object-src 'none'` and `base-uri 'self'` in CSP as a baseline. Implement a restrictive Referrer Policy (e.g., `strict-origin-when-cross-origin`) to protect user privacy.
