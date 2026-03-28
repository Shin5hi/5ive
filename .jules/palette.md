## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-23 - Keyboard Shortcuts and DOM Preservation
**Learning:** When adding keyboard shortcut hints using nested HTML tags like `<kbd>`, using `element.textContent` for state saving/restoration destroys the structural integrity. Instead, saving `element.childNodes` and restoring them via `element.replaceChildren()` preserves the markup while keeping the application secure from XSS compared to using `innerHTML`. Additionally, mapping global shortcuts using `Ctrl` and `Meta` keys significantly boosts accessibility and efficiency.
**Action:** Always use `childNodes` and `replaceChildren()` for state toggling when an element contains structured HTML elements like icons or keyboard hints to ensure preservation of both visuals and accessibility properties.
