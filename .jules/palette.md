## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Preserving Nested HTML in Buttons
**Learning:** When creating accessible buttons with visual hints (like `<kbd>` for keyboard shortcuts), using `textContent` for state saving/restoration strips the HTML tags.
**Action:** Preserve structural integrity by saving and appending `childNodes` directly. This maintains elements without risking XSS via `innerHTML`.
