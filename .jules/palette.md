## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Preserving Nested HTML Tags in DOM State Transitions
**Learning:** When updating elements that contain nested HTML tags (like `<kbd>` hints inside a button), using `element.textContent` to save and restore state will strip the HTML tags, leading to a loss of visual hints and structure.
**Action:** Use `Array.from(element.childNodes)` to save the complete node structure and `element.replaceChildren(...nodes)` to restore it safely. This preserves elements like `<kbd>` without risking XSS vulnerabilities that come with using `innerHTML`.
