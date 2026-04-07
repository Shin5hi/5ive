## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - State restoration with nested HTML tags
**Learning:** When updating DOM elements that contain nested HTML tags (like visual `<kbd>` hints for keyboard shortcuts), using `textContent` for state saving/restoration is insufficient because it strips out the HTML tags upon restoration.
**Action:** Preserve structural integrity by saving child nodes (e.g., `Array.from(element.childNodes)`) and restoring them via `replaceChildren(...)`. This maintains elements without risking XSS via `innerHTML`.
