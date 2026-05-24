## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2025-04-03 - Accessible Keyboard Shortcuts with Visual Hints
**Learning:** Adding keyboard shortcuts (like Ctrl/Cmd+Enter) significantly improves accessibility for power users and keyboard navigators. Using the `<kbd>` tag provides semantic visual hints without custom CSS, but care must be taken to preserve these nested HTML elements when toggling loading states via JavaScript to avoid breaking the DOM structure or risking XSS.
**Action:** When implementing keyboard shortcuts, always combine `aria-keyshortcuts` with cross-platform `<kbd>` tags and keyboard event listeners (`keydown`). For state toggles, preserve DOM integrity by using `replaceChildren()` with original nodes instead of clearing `textContent` or using `innerHTML`.
