## 2025-02-13 - Security Baseline Establishment
**Vulnerability:** Missing security documentation, insecure default configuration (no .gitignore), and lack of Content Security Policy (CSP).
**Learning:** Establishing a secure baseline early in the project is more effective than trying to retroactively add security to a large, insecure codebase.
**Prevention:** Always initialize new repositories with a standard security baseline including SECURITY.md, .gitignore, and a basic CSP.

## 2025-02-14 - Security Regression in Feature Branches
**Vulnerability:** Feature branches may re-introduce insecure patterns like inline event handlers (`onclick`) or `innerHTML`, and often remove the CSP meta tag.
**Learning:** Security is an ongoing process and must be re-verified when merging or integrating feature branches, as UX/feature focused changes might prioritize speed over security best practices.
**Prevention:** Use automated verification scripts (e.g., Playwright) to check for the presence of security headers and the absence of insecure patterns in every PR.
