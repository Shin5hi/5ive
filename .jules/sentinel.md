## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2025-02-12 - Defensive Component Creation & CSP Hardening
**Vulnerability:** Default button behavior and missing form-action restrictions.
**Learning:** Dynamically created buttons in JavaScript defaults to 'submit' in some contexts, which can lead to unexpected form submissions if wrapped in a form later. Additionally, a missing `form-action` directive in CSP leaves a gap for data exfiltration via form injection.
**Prevention:** Always explicitly set `button.type = 'button'` for non-submitting buttons. Harden CSP with `form-action 'none'` if the application does not use forms.
