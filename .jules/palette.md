## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Preserving DOM Structure during State Transitions
**Learning:** When updating DOM elements that contain nested HTML tags (like `<kbd>` for visual hints), using `textContent` for state saving/restoration strips the tags. The application must maintain Sentinel security guidelines (no `innerHTML`), so developers must preserve structural integrity by caching and appending `childNodes` directly.
**Action:** Always save the element's state using `Array.from(element.childNodes)` and restore by explicitly appending those nodes back to the element to safely maintain nested structures without risking XSS.
