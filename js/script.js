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

    const content = document.createElement('span');
    content.className = 'feedback-content';

    const icon = document.createElement('span');
    icon.className = 'success-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '✔';
    content.appendChild(icon);
    content.appendChild(document.createTextNode(' Action triggered successfully!'));
    feedback.appendChild(content);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.setAttribute('aria-label', 'Close notification');
    closeBtn.textContent = '×';
    // ✅ Sentinel: Use addEventListener instead of onclick to allow strict CSP
    closeBtn.addEventListener('click', () => {
      if (feedbackTimeout) clearTimeout(feedbackTimeout);
      feedback.classList.remove('visible');
      setTimeout(() => {
        if (!feedback.classList.contains('visible')) {
          feedback.textContent = '';
        }
      }, 300);
    });
    feedback.appendChild(closeBtn);

    // Trigger reflow/transition
    requestAnimationFrame(() => {
      feedback.classList.add('visible');
    });

    // Clear message after 5 seconds
    feedbackTimeout = setTimeout(() => {
      feedback.classList.remove('visible');
      // Wait for transition to finish
      setTimeout(() => {
        if (!feedback.classList.contains('visible')) {
          feedback.textContent = '';
        }
      }, 300);
    }, 5000);
  }, 1500);
});
