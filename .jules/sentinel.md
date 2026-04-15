## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2025-05-15 - CSP Meta Tag Constraints & Dynamic Button Types
**Vulnerability:** Weak default-src in CSP and implicit button types for dynamic elements.
**Learning:** The `frame-ancestors` directive is ignored when delivered via a `<meta>` tag; it must be set via an HTTP header. Additionally, dynamically created buttons should always have an explicit `type="button"` to prevent accidental form submission if the DOM structure changes.
**Prevention:** Use `default-src 'none'` as a baseline and always explicitly set button types. Be aware of meta-tag CSP limitations.
