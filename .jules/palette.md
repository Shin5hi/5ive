## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Keyboard Shortcuts and Preserving DOM Structure
**Learning:** Adding visual keyboard shortcut hints using `<kbd>` makes them discoverable, but modifying button state by storing and restoring only `textContent` strips away these nested HTML tags (like `<kbd>`).
**Action:** When saving and restoring the content of an element with nested semantic tags (e.g., during loading states), save the actual `childNodes` instead of `textContent`. This preserves the structural integrity without relying on `innerHTML`, keeping the application XSS-safe while providing robust UX.
