## 2025-02-07 - Initializing UX Standards
**Learning:** Starting with a blank repository provides a unique opportunity to embed accessibility and UX best practices from the ground up.
**Action:** Establish a `CONTRIBUTING.md` with clear guidelines on semantic HTML and ARIA usage to guide future development.

## 2025-02-09 - Loading States for Async Actions
**Learning:** Users need immediate feedback for async actions. Simply disabling a button isn't enough; a visual indicator (spinner) and text change ("Loading...") provides clarity and reassurance.
**Action:** Always include loading states for buttons that trigger network requests or long-running processes. Ensure these states are accessible (aria-busy).

## 2025-05-23 - Stable Button Dimensions
**Learning:** Interactive elements must maintain stable dimensions (e.g., via min-width) to prevent jarring layout shifts during state transitions (e.g., loading text).
**Action:** Apply `min-width` to buttons or use absolute positioning for loading states to ensure consistent layout.
