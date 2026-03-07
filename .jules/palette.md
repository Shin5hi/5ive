## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2026-03-07 - Preserving Nested HTML Elements in State Restorations
**Learning:** When updating DOM elements that contain nested HTML tags (e.g., visual <kbd> hints), using `textContent` for state saving and restoration strips out those nested HTML tags.
**Action:** To maintain structural integrity and avoid XSS vulnerabilities (by avoiding `innerHTML`), use `Array.from(element.childNodes)` to save the state, and iterate through the array to `appendChild()` each node when restoring the element's state.
