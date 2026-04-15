## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Keyboard Shortcuts & Preserving DOM Structure
**Learning:** When implementing keyboard shortcuts (`<kbd>` hints and `aria-keyshortcuts`), updating elements (e.g. for loading states) by merely saving/restoring `textContent` destroys nested HTML tags like `<kbd>`.
**Action:** Use `Array.from(element.childNodes)` to save the structural DOM integrity and `replaceChildren(...)` to restore it, thus preserving visual elements like `<kbd>` without resorting to `innerHTML` which risks XSS.
