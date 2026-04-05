## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2025-04-05 - Preserving HTML Structure in DOM State Updates
**Learning:** When updating DOM elements that contain nested HTML tags (e.g., visual `<kbd>` hints), using `textContent` for state saving/restoration destroys the structural integrity by stripping the tags.
**Action:** Preserve structural integrity by saving childNodes (e.g., `Array.from(element.childNodes)`) and restoring them via `replaceChildren(...)`. This maintains nested elements properly and prevents XSS risks without relying on `innerHTML`.
