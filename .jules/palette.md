## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Keyboard Shortcut Hints
**Learning:** Adding visible keyboard shortcut hints (like `<kbd>Ctrl</kbd> + <kbd>Enter</kbd>`) near primary actions significantly improves discoverability for power users and reinforces keyboard accessibility, making the app feel more "pro" and efficient.
**Action:** For primary actions on a page, consider adding a global keyboard shortcut and displaying a visual hint using the `<kbd>` element, along with the `aria-keyshortcuts` attribute for screen readers.
