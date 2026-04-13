## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-04-13 - Preserving Nested Structural Elements in DOM Updates
**Learning:** When using structural or visual hints like nested `<kbd>` tags within a component, using `textContent` for state changes (e.g., loading states) will strip the HTML structure completely. This breaks accessibility and the visual design when restoring the previous state.
**Action:** Use `const originalNodes = Array.from(element.childNodes)` and `element.replaceChildren()` to save and restore nodes accurately without needing `innerHTML` or re-parsing the DOM, ensuring elements like `<kbd>` remain structurally intact after transient state transitions.
