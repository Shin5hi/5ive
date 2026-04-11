## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - DOM Preservation for Nested Elements
**Learning:** When updating DOM elements that contain nested HTML tags (e.g., visual <kbd> hints), avoid using textContent for state saving/restoration as it strips HTML tags. Instead, preserve structural integrity by saving childNodes (e.g., `Array.from(element.childNodes)`) and restoring them via `replaceChildren(...)`, which maintains elements without risking XSS via innerHTML. Also learned the importance of programmatically focusing the element triggered by a keyboard shortcut.
**Action:** Use `replaceChildren()` with preserved nodes for dynamic text updates on elements containing nested semantic hints.
