## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Safe HTML Preservation and Stable Transitions
**Learning:** When implementing interactive state transitions on UI elements that contain visual `<kbd>` hints or other nested HTML, using `textContent` for saving/restoring the element's state strips HTML tags. Additionally, size changes during transitions can cause jarring layout shifts.
**Action:** Preserve structural integrity by saving and appending `childNodes` instead of `textContent`. This prevents XSS via `innerHTML` while maintaining nested elements safely. Also, dynamically lock the element's `min-width` to its current `offsetWidth` before altering its contents to prevent layout shifts.
