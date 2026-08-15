import { expect, Page } from "@playwright/test";
import { ID_USERNAME, ID_PASSWORD, STANDARD_USERNAME, STANDARD_PASSWORD, ID_LOGIN_BTN, logout } from "../helpers/login";

/* TC14: Verify the user is redirected to the Login page after logout.
* Test Steps:
1. Navigate to the the login page.
2. Enter valid username in the Username field.
3. Enter valid password in the Password field.
4. Click the Login button.
5. Logout from the application.
6. Verify that the Username and Password fields are empty.

* Expected result:
1. Login page is displayed.
2. Username is entered successfully.
3. Password is entered successfully.
4. User is redirected to the Products page.
5. User is redirected to the Login page.
6. Username and Password fields are empty.
*/

export default async function (page: Page) {
    // 1
    await page.goto('/');

    // 2 3
    await page.fill(ID_USERNAME, STANDARD_USERNAME);
    await page.fill(ID_PASSWORD, STANDARD_PASSWORD);

    // 4
    await page.locator(ID_LOGIN_BTN).click();
    await expect(page).toHaveURL(/inventory/);

    // 5
    await logout(page);

    // 6
    const username = await page.locator(ID_USERNAME).inputValue();
    const password = await page.locator(ID_PASSWORD).inputValue();
    expect(username).toBe("");
    expect(password).toBe("");
}