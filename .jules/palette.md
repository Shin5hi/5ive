## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Preserving Structural Integrity with DOM Nodes
**Learning:** When updating DOM elements that contain nested HTML tags (e.g., visual <kbd> hints), using `textContent` for state saving/restoration is problematic because it strips out the HTML tags and converts everything to a flat text string.
**Action:** Preserve structural integrity by saving `Array.from(element.childNodes)` and restoring them using `element.replaceChildren(...originalNodes)`. This maintains the nested elements without risking XSS vulnerabilities via `innerHTML`.
