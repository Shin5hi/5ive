## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2026-02-24 - Keyboard Shortcut Hints
**Learning:** Adding visible keyboard shortcuts (like Ctrl+Enter) alongside buttons improves discoverability for power users without cluttering the UI, provided they are styled unobtrusively.
**Action:** When implementing primary actions, consider adding a standard keyboard shortcut and displaying a small visual hint using `<kbd>` elements to encourage keyboard usage.
