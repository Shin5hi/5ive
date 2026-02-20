## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2026-02-20 - Keyboard Shortcuts for Primary Actions
**Learning:** Adding keyboard shortcuts (e.g., Ctrl+Enter) for primary actions significantly improves power user efficiency. However, they must be discoverable via visual hints (styled `<kbd>` tags) and programmatic announcements (`aria-keyshortcuts`) to be truly accessible.
**Action:** When adding a primary action button, consider if a common keyboard shortcut (like Ctrl+Enter for submission) applies. If so, implement it with both visual and ARIA hints.
