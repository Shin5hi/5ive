## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - Preserving Nested HTML in Dynamic Buttons
**Learning:** When implementing keyboard hints (`<kbd>`) inside buttons that dynamically change content (like showing a loading spinner), simple `textContent` state saving and restoration will strip the internal HTML tags upon restoration.
**Action:** Always use `childNodes` and `replaceChildren` when saving and restoring state for elements with nested HTML tags to preserve structural integrity safely without resorting to `innerHTML` (avoiding XSS risks).
