## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Preserving DOM Structure during State Changes
**Learning:** When adding visual hints like `<kbd>` tags inside buttons, updating the button's text using `textContent` during state changes (like showing a loading spinner) destroys the nested HTML structure. Rebuilding the HTML using `innerHTML` introduces XSS risks and violates security baselines.
**Action:** Always save the original DOM structure using `Array.from(element.childNodes)` before modifying the element's content, and restore it using `element.replaceChildren(...originalNodes)` to safely preserve complex structures while adhering to security best practices.
