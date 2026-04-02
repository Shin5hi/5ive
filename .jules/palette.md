## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2026-04-02 - Preserving DOM Structure during State Changes
**Learning:** When temporarily replacing element content (e.g., showing a loading spinner), clearing `textContent` strips nested semantic HTML tags (like `<kbd>`).
**Action:** Use `Array.from(element.childNodes)` to cache the DOM state, and `element.replaceChildren(...originalNodes)` to restore it, preserving accessibility semantics without resorting to unsafe `innerHTML`.
