## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - State Preservation for Nested Hints
**Learning:** When adding visual hints like `<kbd>` tags inside buttons, updating loading states by simply saving and restoring `textContent` strips out the HTML tags. Instead, preserving structural integrity requires saving and appending `childNodes` directly.
**Action:** Always save the original `childNodes` array instead of `textContent` when handling loading states for interactive elements containing nested tags, ensuring elements are maintained without risking XSS via `innerHTML`.
