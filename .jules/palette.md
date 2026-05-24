## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Preserving Nested HTML Elements During State Transitions
**Learning:** When updating DOM elements that contain nested HTML tags (like `<kbd>` for visual shortcuts), avoid using `textContent` for saving and restoring the original state, as it strips the HTML tags and converts them to plain text.
**Action:** Preserve structural integrity by saving and appending `childNodes` directly. This maintains the nested elements without resorting to using `innerHTML`, thus preventing XSS vulnerabilities.
