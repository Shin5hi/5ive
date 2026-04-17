## YYYY-MM-DD - [Title]
**Learning:** [UX/a11y insight]
**Action:** [How to apply next time]

## 2024-05-24 - Preserving Nested HTML Tags during DOM manipulation
**Learning:** When saving and restoring the contents of DOM elements during state transitions (e.g., adding a loading spinner to a button), using `textContent` strips out nested HTML tags (like visual `<kbd>` hints).
**Action:** Preserve structural integrity by saving and appending `childNodes` directly (e.g. `Array.from(element.childNodes)`). This maintains nested elements without risking XSS via `innerHTML`, complying with the Sentinel security baseline while allowing rich UX enhancements.
