## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-18 - Preserving Structural Hints in Dynamic Buttons
**Learning:** When adding visual semantic hints (like `<kbd>` tags) to buttons that undergo state changes (e.g., showing a loading spinner), saving and restoring the button's content using `.textContent` strips out the HTML elements, breaking the structural integrity and styles.
**Action:** Use `Array.from(element.childNodes)` to save the actual DOM nodes prior to the state change, and restore them using `element.replaceChildren(...originalNodes)` to preserve embedded structural elements and prevent XSS risks associated with `.innerHTML`.
