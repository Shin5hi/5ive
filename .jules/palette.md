## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Preserving Visual Elements During State Changes
**Learning:** When temporarily replacing button content (like adding a loading spinner), saving and restoring state using `textContent` strips out nested HTML elements like `<kbd>` tags used for visual shortcut hints. Using `innerHTML` poses security risks.
**Action:** Always preserve structural integrity during temporary state changes by saving elements as an array of nodes (`Array.from(element.childNodes)`) and restoring them via `appendChild`, maintaining both visual design and strict security baselines.
