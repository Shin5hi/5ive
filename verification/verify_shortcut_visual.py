import os
from playwright.sync_api import sync_playwright

def run_visual_verification():
    file_path = os.path.abspath("index.html")
    file_url = f"file://{file_path}"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print(f"Loading {file_url}...")
        page.goto(file_url)

        # Take a screenshot of the initial state showing the helper text
        page.screenshot(path="verification/shortcut_helper_text.png")
        print("Screenshot saved to verification/shortcut_helper_text.png")

        browser.close()

if __name__ == "__main__":
    run_visual_verification()
