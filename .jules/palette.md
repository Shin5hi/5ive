## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Keyboard Shortcuts and Nested Tags
**Learning:** When updating DOM elements that contain nested HTML tags (e.g., visual `<kbd>` hints), using `textContent` for state saving/restoration strips the HTML tags, leading to a loss of visual styling and semantic structure. Using `innerHTML` introduces XSS vulnerabilities.
**Action:** Always preserve structural integrity by saving and appending `childNodes` directly instead of `textContent`. This maintains the nested elements (like `<kbd>`) safely without risking XSS. Additionally, always provide `aria-keyshortcuts` when implementing global keyboard listeners.
