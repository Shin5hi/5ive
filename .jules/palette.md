## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-11-20 - Preserving Nested HTML in Interactive Elements
**Learning:** When adding structural HTML (like visual `<kbd>` hints) inside buttons or other interactive elements, replacing `textContent` during loading states will destructively strip those tags.
**Action:** Use `Array.from(element.childNodes)` to save state, and iterate through the array to `appendChild` when restoring state. This preserves nested HTML structure while maintaining security baselines by avoiding `innerHTML`.
