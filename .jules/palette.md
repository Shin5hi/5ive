## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-04-10 - Keyboard Shortcuts and DOM Node Preservation
**Learning:** When adding visual `<kbd>` hints to buttons for keyboard shortcuts, using `textContent` for state saving (like loading text) strips away the nested HTML tags.
**Action:** Preserve structural integrity by saving `childNodes` (e.g., `Array.from(element.childNodes)`) and restoring them via `replaceChildren(...)` instead of `textContent`. Always implement cross-platform (Ctrl/Meta) listeners, use `event.preventDefault()`, and programmatically focus the triggered element for keyboard shortcuts.
