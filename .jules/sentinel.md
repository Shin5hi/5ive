## 2025-02-12 - Secure DOM Manipulation & CSP Baseline
**Vulnerability:** Use of `innerHTML` for dynamic content and missing Content Security Policy (CSP).
**Learning:** Even if the content is currently static, using `innerHTML` is a dangerous pattern that can lead to XSS if the application grows. Prefer `textContent` and explicit DOM node creation.
**Prevention:** Establish a strong CSP and enforce secure DOM manipulation practices through documentation and code reviews.

## 2025-05-14 - Playwright Verification & CSP 'unsafe-eval'
**Vulnerability:** Playwright's `wait_for_function` and `evaluate` with string arguments trigger CSP 'unsafe-eval' violations.
**Learning:** In a security-hardened environment with a strict CSP, automated tests can fail not because of application bugs, but because the testing tools themselves use patterns (like `eval()`) that the policy forbids.
**Prevention:** Use `expect` assertions or native function handles in Playwright instead of string-based evaluation to verify state in environments with strict Content Security Policies.
