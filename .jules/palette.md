## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Preserving Semantic Elements in State Transitions
**Learning:** When temporarily replacing a button's content (e.g., for a loading state) that contains nested semantic tags like `<kbd>` or `<svg>`, saving and restoring via `.textContent` strips those elements. On the other hand, using `.innerHTML` poses security risks.
**Action:** To maintain structural integrity without risking XSS, save the element's state by cloning its `childNodes` (`Array.from(el.childNodes).map(n => n.cloneNode(true))`) and restore it by appending those cloned nodes back.
