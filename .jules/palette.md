## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2025-03-05 - Preserving Structural HTML Tags During State Updates
**Learning:** When updating DOM elements containing nested semantic HTML tags (e.g., `<kbd>` elements for keyboard shortcut hints), utilizing `.textContent` for state saving or resetting strips away the original structural markup. This creates regressions where accessibility or visual hints disappear post-interaction.
**Action:** When toggling states on elements with nested structural markup, either save and restore `.childNodes` (via `Array.from()` or similar array conversion to prevent live NodeList mutability issues) or append pre-created DOM nodes, completely avoiding `.textContent` for state restoration to prevent unintended stripping.
