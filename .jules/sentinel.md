## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2026-03-31 - Patch Constraints & Verification
**Vulnerability:** N/A (Process Learning)
**Learning:** For security PRs, the 50-line diff limit is a strict constraint that includes any new verification or test scripts. Introducing a new language dependency (e.g., Python in a Node project) for verification is discouraged as it affects maintainability.
**Prevention:** Use project-appropriate tooling for permanent tests and keep temporary verification scripts outside of the committed diff.
