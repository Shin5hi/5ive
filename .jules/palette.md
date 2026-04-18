## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Structural State Preservation for Keyboard Shortcuts
**Learning:** When implementing keyboard shortcuts (like Ctrl+K), adding a visual `<kbd>` hint creates nested HTML. Using `textContent` for saving/restoring the button state strips these HTML tags.
**Action:** Preserve structural integrity by saving `childNodes` (`Array.from(element.childNodes)`) and restoring them via `replaceChildren(...)`. This maintains elements like `<kbd>` without risking XSS via `innerHTML`.
