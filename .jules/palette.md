## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Keyboard Shortcut Visual Hints & DOM Preservation
**Learning:** Adding `<kbd>` hints directly inside buttons significantly improves discoverability for power users. However, when these buttons have loading states that temporarily alter their content, using `textContent` for state restoration destroys the nested HTML structure. This completely removes the visual hint. Rebuilding it with `innerHTML` opens up XSS vulnerabilities.
**Action:** When implementing visual hints (like `<kbd>`) inside interactive elements that change state, ALWAYS preserve the DOM structure by saving the element's `childNodes` as an array before the state change, and re-appending them to restore the state. This maintains accessibility and visual hints without risking XSS.
