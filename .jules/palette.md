## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Preserving Nested HTML in Buttons
**Learning:** When creating loading states for buttons containing nested HTML (like `<kbd>` tags for keyboard shortcuts), using `textContent` for state saving/restoration completely strips the HTML tags, resulting in plaintext output.
**Action:** Always save an array of the element's `childNodes` (e.g., `Array.from(btn.childNodes)`) instead of `textContent` to preserve structural integrity, and restore them using `.appendChild()` when resetting the state, avoiding XSS risks associated with `.innerHTML`.
