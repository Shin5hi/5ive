# Contributing to This Project

We value a user experience that is intuitive, accessible, and pleasant. As you contribute, please adhere to the following UX and Accessibility standards.

## UX and Accessibility Standards

### 1. Semantic HTML
- Use semantic elements (`<button>`, `<nav>`, `<main>`, `<header>`) whenever possible.
- Avoid using `<div>` or `<span>` for interactive elements unless absolutely necessary, and if you do, ensure you add `role`, `tabindex`, and proper keyboard handlers.

### 2. Accessibility (a11y)
- **ARIA Labels:** All interactive elements without visible text (e.g., icon-only buttons) MUST have an `aria-label` attribute describing the action.
  ```html
  <!-- ✅ GOOD -->
  <button aria-label="Delete item">
    <i class="icon-trash"></i>
  </button>
  ```
- **Focus Management:** Ensure all interactive elements have a visible focus state. Do not remove outline unless replacing it with a custom focus style.
- **Keyboard Navigation:** Users should be able to navigate the entire application using only the keyboard. Test your changes by tabbing through the interface.

### 3. Visual Polish
- Maintain consistent spacing and alignment.
- Provide feedback for all user interactions (hover states, focus states, active states).
- Use loading indicators for asynchronous operations.

### 4. Code Quality
- Keep components small and focused.
- Ensure props are correctly typed (if using TypeScript).
- Write descriptive variable and function names.

## Development Process

1. **Observe:** Look for opportunities to improve UX (e.g., missing labels, poor contrast).
2. **Select:** Choose one small, impactful improvement.
3. **Paint:** Implement the change with care for accessibility.
4. **Verify:** Test with keyboard and screen reader tools.
5. **Present:** Submit your PR with a clear description of the UX benefit.

Thank you for helping us build a delightful experience!
