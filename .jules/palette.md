## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-18 - Preserving Nested HTML Tags in Button State
**Learning:** When building visual enhancements like `<kbd>` shortcut hints inside interactive elements (e.g., `<button>`), caching the element's state using `.textContent` will destroy any nested DOM elements when the state is restored. This applies to spinners, icons, or shortcut hints.
**Action:** Use `.childNodes` array to save and append elements (e.g., `originalNodes = Array.from(btn.childNodes)`) rather than stripping HTML with `textContent`. This ensures accessibility, visual hints, and structural integrity are maintained safely across async loading states without relying on XSS-prone `innerHTML`.
