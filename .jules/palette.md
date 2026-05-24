## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Keyboard Shortcuts and Preserving HTML Nodes
**Learning:** Implementing keyboard shortcuts requires aria-keyshortcuts, visual <kbd> hints, cross-platform (Ctrl/Meta) listeners, preventDefault(), and programmatic focus. Also, when updating DOM elements with nested HTML tags (like visual <kbd> hints), using `textContent` for state saving strips the HTML structure.
**Action:** Always preserve structural integrity of nested tags during state changes by saving and appending `childNodes` directly instead of relying on `textContent`, which maintains elements without risking XSS via innerHTML. For keyboard shortcuts, adhere to the pattern of aria-keyshortcuts + explicit UI hint + cross-platform listener + focus management.
