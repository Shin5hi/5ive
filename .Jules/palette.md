## 2025-02-07 - Initializing UX Standards
**Learning:** Starting with a blank repository provides a unique opportunity to embed accessibility and UX best practices from the ground up.
**Action:** Establish a `CONTRIBUTING.md` with clear guidelines on semantic HTML and ARIA usage to guide future development.

## 2025-04-10 - Accessible Notifications
**Learning:** Native `alert()` dialogs are disruptive and inaccessible; replacing them with `aria-live` regions provides non-blocking feedback.
**Action:** Use the `showToast` pattern for all future user feedback, ensuring a 5000ms duration for readability.
