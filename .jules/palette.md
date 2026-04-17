## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2026-03-10 - Preserving Nested Element Integrity in DOM State Changes
**Learning:** When updating interactive elements (like toggling button loading states), relying on `textContent` to save and restore the previous state inherently destroys and removes nested HTML tags (like visual `<kbd>` hints).
**Action:** Always preserve the DOM's structural integrity by iterating over, saving, and appending `childNodes` directly rather than manipulating `textContent`. This ensures accessibility hints are retained across state changes without relying on unsafe `innerHTML` replacements.
