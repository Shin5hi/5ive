const actionBtn = document.getElementById('action-btn');
const feedback = document.getElementById('feedback');
let feedbackTimeout;

actionBtn.addEventListener('click', () => {
  // Clear any existing timeout
  if (feedbackTimeout) clearTimeout(feedbackTimeout);

  // Reset feedback visual state
  feedback.classList.remove('visible');
  feedback.textContent = '';

  // Set loading state
  // ✅ Sentinel: Avoid innerHTML to prevent XSS
  const originalText = actionBtn.textContent;
  actionBtn.disabled = true;
  actionBtn.setAttribute('aria-busy', 'true');
  actionBtn.textContent = '';

  const spinner = document.createElement('span');
  spinner.className = 'spinner';
  spinner.setAttribute('aria-hidden', 'true');
  actionBtn.appendChild(spinner);
  actionBtn.appendChild(document.createTextNode('Loading...'));

  // Simulate async operation
  setTimeout(() => {
    // Reset state
    actionBtn.disabled = false;
    actionBtn.removeAttribute('aria-busy');
    actionBtn.textContent = originalText;

    // Show success with icon and transition
    // ✅ Sentinel: Using textContent and DOM methods instead of innerHTML
    feedback.textContent = '';
    const icon = document.createElement('span');
    icon.className = 'success-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '✔';
    feedback.appendChild(icon);
    feedback.appendChild(document.createTextNode(' Action triggered successfully!'));

    // Trigger reflow/transition
    requestAnimationFrame(() => {
      feedback.classList.add('visible');
    });

    // Clear message after 3 seconds
    feedbackTimeout = setTimeout(() => {
      feedback.classList.remove('visible');
      // Wait for transition to finish
      setTimeout(() => {
        if (!feedback.classList.contains('visible')) {
          feedback.textContent = '';
        }
      }, 300);
    }, 3000);
  }, 1500);
});
