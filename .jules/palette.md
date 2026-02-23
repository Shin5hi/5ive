## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Keyboard Shortcut Discoverability
**Learning:** Adding keyboard shortcuts (e.g., Ctrl+Enter) is only half the battle; they are invisible to most users without explicit visual cues. Using `<kbd>` tags in helper text makes these power-user features discoverable and learnable.
**Action:** Always pair `aria-keyshortcuts` with visible `<kbd>` hints near the interactive element.
