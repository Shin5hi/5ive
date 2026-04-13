## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-03-01 - Preserving Nested HTML Tags in Button State
**Learning:** When adding nested HTML tags like visual `<kbd>` hints inside interactive elements, using `textContent` for state saving/restoration strips the tags.
**Action:** Always preserve structural integrity by saving and appending `childNodes` directly instead of modifying `textContent`, which maintains elements without risking XSS via `innerHTML`.
