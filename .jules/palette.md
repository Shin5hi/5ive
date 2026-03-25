## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Keyboard Shortcuts and Structural Integrity
**Learning:** When adding visual `<kbd>` hints or other HTML tags inside interactive elements like buttons, using `textContent` for state saving/restoration strips these nested tags. This breaks the UI on restoration. To preserve structural integrity without risking XSS (via `innerHTML`), it's essential to save and append `childNodes` directly.
**Action:** Always use `childNodes` preservation (e.g., `Array.from(el.childNodes)` and `el.appendChild(node)`) instead of `textContent` when temporarily modifying states of elements containing nested HTML tags.
