## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Keyboard Shortcuts Pattern
**Learning:** For actions with keyboard shortcuts, combining `aria-keyshortcuts`, visual `<kbd>` hints in helper text, and cross-platform (Ctrl/Meta) listeners creates a robust, accessible experience.
**Action:** When adding shortcuts, always include visual cues and ARIA attributes, and ensure listeners handle both Ctrl and Meta keys.
