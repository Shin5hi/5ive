## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2026-02-15 - State Restoration with Nested HTML Elements
**Learning:** When adding structural HTML (like a visual `<kbd>` hint) inside a button that goes through state changes (e.g., loading spinners), saving state via `textContent` destroys the internal tags. `innerHTML` is restricted by Sentinel security guidelines.
**Action:** Preserve the button's internal structure by caching `Array.from(element.childNodes)` and re-appending those exact nodes to restore state, ensuring visual hints and accessibility elements remain intact without risking XSS.