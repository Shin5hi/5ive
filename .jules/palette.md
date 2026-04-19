## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-04-19 - Keyboard Shortcut Hints & Preserving DOM Structure
**Learning:** When adding visual `<kbd>` hints inside interactive elements (like buttons), updating state using `textContent` destroys the nested HTML structure, removing the hints when state is restored. Furthermore, relying on `innerHTML` introduces XSS vulnerabilities (blocked by strict CSPs).
**Action:** When updating DOM elements that contain nested HTML tags, preserve structural integrity by caching child nodes via `Array.from(element.childNodes)` and resetting state using `element.replaceChildren(...cachedNodes)`. This safely maintains visual hints without violating security baselines.
