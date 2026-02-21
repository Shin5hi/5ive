## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2026-02-21 - Meta Tag CSP Limitations in Static Sites
**Vulnerability:** Ineffective security headers/directives (e.g., `form-action`, `frame-ancestors`) when implemented via `<meta>` tags.
**Learning:** Certain CSP directives and security headers are ignored by browsers when delivered via `<meta http-equiv>`. They must be set via HTTP headers (e.g., in server configuration or edge functions). In a pure static environment without a server configuration, these directives provide "security theater" without real protection.
**Prevention:** Be aware of the limitations of meta tags for security. If critical directives like `form-action` are required, the hosting environment must be configured to send the appropriate HTTP headers.
