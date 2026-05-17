## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2026-02-18 - Keyboard Shortcuts
**Learning:** Adding keyboard shortcuts (e.g., Ctrl+Enter) significantly improves efficiency for power users, but requires careful implementation: `aria-keyshortcuts` for AT, visual `<kbd>` hints for sighted users, and cross-platform event listeners (Ctrl/Meta) to ensure broad compatibility.
**Action:** When adding primary actions, consider implementing a keyboard shortcut and document it visibly using `<kbd>` elements in helper text.
