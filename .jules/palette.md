## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Preserve DOM Structural Integrity for Nested HTML
**Learning:** Saving and restoring a button's state using `textContent` inadvertently strips nested HTML elements like `<kbd>` shortcut hints or inline SVGs, breaking accessibility and visual design.
**Action:** When updating elements containing nested HTML to a temporary state (like loading), save structural state by cloning `childNodes` (`[...el.childNodes].map(n => n.cloneNode(true))`) and restore using `el.replaceChildren(...nodes)` instead of modifying `textContent`.
