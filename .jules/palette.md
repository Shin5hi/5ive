## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2025-02-12 - Keyboard Shortcuts and Preserving DOM Structure
**Learning:** When adding visual `<kbd>` tags or other HTML inside elements with loading states, saving and restoring state using `textContent` destroys the structure. Using `innerHTML` poses XSS risks.
**Action:** Always preserve structural integrity by saving `Array.from(element.childNodes)` and using `appendChild` to restore elements when handling state changes, maintaining elements securely without risking XSS.
