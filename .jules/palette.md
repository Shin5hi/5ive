## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2026-04-09 - DOM Node Preservation
**Learning:** When updating DOM elements that contain nested HTML tags (e.g., visual `<kbd>` hints), avoid using `textContent` for state saving/restoration as it strips HTML tags.
**Action:** Preserve structural integrity by saving childNodes (e.g., `Array.from(element.childNodes)`) and restoring them via `replaceChildren(...)`. This maintains elements without risking XSS via `innerHTML` and works well with Sentinel standards.
