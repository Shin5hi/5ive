import os
import time
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get absolute path to index.html
        cwd = os.getcwd()
        file_path = f"file://{cwd}/index.html"

        print(f"Loading {file_path}")
        page.goto(file_path)

        # Verify visual hint is present
        expect(page.locator("text=Shortcut: Ctrl + Enter")).to_be_visible()
        print("Visual hint found.")

        # Press Ctrl+Enter
        print("Pressing Control+Enter...")
        page.keyboard.press("Control+Enter")

        # Wait for loading state
        # The button text changes to "Loading..."
        expect(page.locator("#action-btn")).to_have_text("Loading...")
        print("Button is in loading state.")

        # Wait for success message (simulated delay is 1500ms)
        # We give it a bit more time to be safe
        page.wait_for_timeout(2000)

        # Check for success message
        feedback = page.locator("#feedback")
        expect(feedback).to_contain_text("Action triggered successfully!")
        expect(feedback).to_be_visible()
        print("Success message verified.")

        # Take a screenshot
        screenshot_path = "verification/shortcut_verified.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    run()
