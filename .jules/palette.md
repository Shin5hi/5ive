## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Keyboard Shortcut Discoverability
**Learning:** Adding keyboard shortcuts (like Ctrl+Enter) significantly improves efficiency for power users, but they are useless if invisible. Adding visual hints using `<kbd>` elements directly near the interactive control bridges the gap between casual and power usage.
**Action:** Whenever implementing a keyboard shortcut, pair it with a visible, accessible `<kbd>` hint in the UI and an `aria-keyshortcuts` attribute on the target element.
