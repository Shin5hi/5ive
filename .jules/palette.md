## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-28 - Preserving HTML Structure in Loading Buttons
**Learning:** When updating DOM elements that contain nested HTML tags (e.g., visual `<kbd>` hints or icons), avoid using `textContent` for state saving/restoration as it strips HTML tags. Instead, preserve structural integrity by saving and appending `childNodes` directly, which maintains elements without risking XSS via `innerHTML`.
**Action:** Always save the original state of complex elements as an array of `childNodes` (`Array.from(element.childNodes)`) before temporarily replacing their content (like showing a loading spinner), and restore them by re-appending those nodes.
