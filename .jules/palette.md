## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Preserving DOM Structure during State Changes
**Learning:** When adding structural visual hints like `<kbd>` tags to buttons, updating button state via `textContent` inadvertently strips out these important nested HTML elements, breaking the UX enhancement.
**Action:** Use `Array.from(element.childNodes)` to save the actual DOM nodes before a state change (like a loading spinner), and restore them using `element.replaceChildren(...originalNodes)` to preserve the structural integrity and accessibility without risking XSS through `innerHTML`.
