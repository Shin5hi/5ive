## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Keyboard Shortcuts Pattern
**Learning:** Adding visual `<kbd>` hints alongside `aria-keyshortcuts` significantly improves discoverability for keyboard shortcuts.
**Action:** When implementing shortcuts, always pair the JS listener with visual hints (styled `<kbd>` tags) and semantic ARIA attributes.
