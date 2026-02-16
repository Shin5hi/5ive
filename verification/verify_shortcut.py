import os
import time
from playwright.sync_api import sync_playwright

def run_verification():
    file_path = os.path.abspath("index.html")
    file_url = f"file://{file_path}"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print(f"Loading {file_url}...")
        page.goto(file_url)

        # Verify button exists and is enabled
        btn = page.locator("#action-btn")
        if not btn.is_visible():
            print("ERROR: Action button not found.")
            exit(1)

        print("Button found. Testing keyboard shortcut (Control+Enter)...")

        # Trigger the shortcut
        page.keyboard.press("Control+Enter")

        # Verify loading state
        # The button text should change to "Loading..."
        # Wait a bit for the event loop
        time.sleep(0.1)

        is_busy = btn.get_attribute("aria-busy")
        btn_text = btn.text_content()

        if is_busy == "true" and "Loading" in btn_text:
            print("SUCCESS: Button entered loading state correctly.")
        else:
            print(f"ERROR: Button did not enter loading state. busy={is_busy}, text={btn_text}")
            exit(1)

        # Wait for success message (approx 1.5s)
        print("Waiting for async operation...")
        time.sleep(2)

        feedback = page.locator("#feedback")
        feedback_text = feedback.text_content()

        if "Action triggered successfully" in feedback_text:
             print("SUCCESS: Action completed and feedback shown.")
        else:
             print(f"ERROR: Feedback not shown. Content: {feedback_text}")
             exit(1)

        browser.close()

if __name__ == "__main__":
    run_verification()
