## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Keyboard Shortcuts and DOM Preservation
**Learning:** When adding visual `<kbd>` hints for keyboard shortcuts inside interactive elements (like buttons), typical state-saving techniques using `textContent` strip the HTML tags on restoration. Using `Array.from(element.childNodes)` and `element.replaceChildren()` preserves structural integrity and nested tags without resorting to `innerHTML` (avoiding XSS risks). Additionally, cross-platform shortcut listeners should account for `event.metaKey` (Mac) or `event.ctrlKey` (Windows/Linux) along with `event.preventDefault()` to avoid default browser actions, and then programmatically focus and trigger the element for accessibility.
**Action:** Use `childNodes` and `replaceChildren()` to manage states of elements containing nested HTML. Ensure cross-platform support with explicit focus updates when handling keyboard shortcuts.
