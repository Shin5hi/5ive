## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2026-03-16 - Hardened CSP via Asset Externalization
**Vulnerability:** Use of 'unsafe-inline' in Content Security Policy (CSP).
**Learning:** Hardening a CSP by removing 'unsafe-inline' requires moving all inline `<style>` and `<script>` blocks to external files and refactoring inline event handlers (e.g., `onclick`) to use `addEventListener`.
**Prevention:** Always externalize CSS and JS to enable a strict CSP that prohibits inline execution, reducing the attack surface for XSS.
