## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-24 - DOM Integrity and Keyboard Shortcuts
**Learning:** When updating DOM elements that contain nested HTML tags (e.g., visual `<kbd>` hints), using `textContent` for state saving/restoration strips the HTML tags. Furthermore, keyboard shortcuts need appropriate visual hints and `aria-keyshortcuts` for accessibility, along with cross-platform (Ctrl/Meta) keydown listeners that prevent default behavior and programmatically focus the triggered element.
**Action:** Use `Array.from(element.childNodes)` to save state and `replaceChildren(...)` to restore it, ensuring structural integrity is maintained without risking XSS via `innerHTML`. When implementing keyboard shortcuts, always add visual `<kbd>` hints, the `aria-keyshortcuts` attribute, handle cross-platform modifiers (Ctrl/Meta), and ensure proper focus state handling.
