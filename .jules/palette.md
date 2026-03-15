## 2024-05-23 - Accessible Toast Notifications
**Learning:** Toast notifications often disappear too quickly for some users. Implementing a 5000ms minimum duration AND a manual close button ensures compliance with accessibility standards (WCAG 2.2.1 Timing Adjustable) and improves usability for everyone.
**Action:** When implementing temporary feedback messages, always include a visual close button and ensure the timeout is sufficient (>= 5000ms), or allow user preference to extend it.

## 2024-05-25 - Preserving Nested HTML in State Changes
**Learning:** When temporarily replacing the content of an element that contains nested HTML tags (like `<kbd>` for keyboard shortcuts), saving and restoring state with `textContent` will strip out those HTML tags and leave only plain text.
**Action:** Use `childNodes` and `.appendChild()` to safely preserve and restore the structural integrity of elements containing nested HTML without resorting to insecure `innerHTML`.
