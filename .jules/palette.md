## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Preserving Nested HTML in Interactive Elements
**Learning:** When updating interactive elements (like buttons) that contain nested HTML tags (such as visual `<kbd>` hints), using `textContent` for state saving/restoration strips the HTML structure. Using `childNodes` and `replaceChildren()` preserves structural integrity and avoids XSS risks associated with `innerHTML`.
**Action:** When saving and restoring the initial state of a UI element, prefer `Array.from(element.childNodes)` and `element.replaceChildren(...originalNodes)` instead of `element.textContent` or `element.innerHTML`.
