## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2026-04-01 - Preserving Structural Integrity with visual hints
**Learning:** When updating DOM elements containing nested HTML tags (like visual <kbd> hints), using `textContent` for state saving and restoration strips the HTML tags, leading to a loss of structural integrity and visual styling. Since using `innerHTML` violates security baselines (XSS risks), using `childNodes` combined with `Element.replaceChildren()` provides a secure, performant way to preserve internal structure during state changes.
**Action:** When saving and restoring the content of an element that includes child elements (e.g. icons, <kbd> tags), convert `element.childNodes` to an array to save state, and use `element.replaceChildren(...savedNodes)` to restore it safely without innerHTML.
