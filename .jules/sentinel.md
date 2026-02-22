## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2025-02-13 - Hardened Security Baseline for Static Sites
**Vulnerability:** Weak CSP (missing `object-src` and `base-uri`) and use of `onclick` handlers.
**Learning:** For pure static sites, the `<meta http-equiv="Content-Security-Policy">` tag is the primary defense. Including `object-src 'none'` and `base-uri 'self'` is essential for a robust baseline. Additionally, while `onclick` assignments in JS are better than HTML attributes, `addEventListener` is more consistent with modern security best practices.
**Prevention:** Always include `object-src 'none'` and `base-uri 'self'` in CSP meta tags. Standardize on `addEventListener` for all interactive elements to minimize XSS surface area.
