import pytest
from playwright.sync_api import Page, expect

def test_page_loads_and_functional(page: Page):
    # Go to the local server
    page.goto("http://localhost:8080")

    # Check title
    expect(page).to_have_title("5ive - UX Sample")

    # Click the button
    btn = page.locator("#action-btn")
    btn.click()

    # Check for loading state
    expect(btn).to_be_disabled()
    expect(btn).to_contain_text("Loading...")

    # Wait for success message (simulated delay is 1500ms)
    feedback = page.locator("#feedback")
    expect(feedback).to_contain_text("Action triggered successfully!", timeout=5000)
    expect(feedback).to_have_class("feedback visible")

    # Click close button
    close_btn = feedback.locator(".close-btn")
    close_btn.click()

    # Wait for feedback to hide (transition is 300ms)
    expect(feedback).not_to_have_class("visible")

def test_no_csp_violations(page: Page):
    violations = []
    page.on("console", lambda msg: violations.append(msg.text) if "Content Security Policy" in msg.text else None)

    page.goto("http://localhost:8080")

    # Give some time for any violations to appear
    page.wait_for_timeout(1000)

    assert len(violations) == 0, f"CSP violations found: {violations}"
