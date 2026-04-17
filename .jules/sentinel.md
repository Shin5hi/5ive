## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2025-05-15 - CSP Hardening & Secure Event Handlers
**Vulnerability:** Weak CSP allowing form actions and reliance on inline property event handlers (`onclick`).
**Learning:** For static sites without forms, `form-action 'none'` provides defense-in-depth against unauthorized data exfiltration. Using `addEventListener` instead of `onclick` improves code clarity and follows modern security practices.
**Prevention:** Always set explicit button types and harden CSP directives like `form-action` and `base-uri` even if not immediately used. Use `addEventListener` for all dynamic elements.
