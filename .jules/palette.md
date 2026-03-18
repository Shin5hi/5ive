## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-06-25 - Preserving Nested HTML in Buttons
**Learning:** When adding keyboard shortcut hints (like `<kbd>`) to buttons, their loading states often unintentionally destroy these nested HTML tags by resetting via `textContent`.
**Action:** Always save and restore the `childNodes` of an element instead of `textContent` when updating its content temporarily (e.g., during loading states), maintaining elements without risking XSS via `innerHTML`.
