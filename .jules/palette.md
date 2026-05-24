## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Preserving DOM structures in state transitions
**Learning:** Using `textContent` to store and restore an element's state destroys nested HTML tags, such as visual keyboard shortcut hints (`<kbd>`).
**Action:** Use `Array.from(element.childNodes)` to save the structural integrity of elements, and `replaceChildren(...originalNodes)` for efficient, single-operation DOM updates that prevent HTML tag loss without the XSS risks associated with `innerHTML`.
