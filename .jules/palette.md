## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2026-03-19 - Keyboard Shortcut Visual Hints
**Learning:** When adding keyboard shortcut visual hints like `<kbd>` inside buttons, state-restoration mechanisms that rely on `textContent` will strip the nested HTML tags. Additionally, shortcuts must be properly labeled with `aria-keyshortcuts`.
**Action:** Use `childNodes` preservation instead of `textContent` when modifying button content to show a loading state, avoiding `innerHTML` to maintain XSS protection (the Sentinel standard). Pair this with a global keyboard listener that focuses and clicks the button, along with `aria-keyshortcuts`.
