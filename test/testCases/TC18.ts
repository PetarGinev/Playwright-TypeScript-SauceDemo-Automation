import { expect, Page } from "@playwright/test";
import {
    ID_USERNAME,
    ID_PASSWORD,
    FORM_INPUT_ERROR,
    FORM_INPUT_ERROR_ICON,
    ERROR_MESSAGE_CONTAINER
} from "../helpers/login";

/* TC18: Verify direct access to the Inventory page without authentication redirects to the Login page.
* Test Steps:
1. Navigate directly to the Inventory page using its URL.
2. Verify that the user is redirected to the Login page and error message is displayed.
3. Navigate directly to the Cart page using its URL.

* Expected result:
1. User navigates directly to the Inventory page using its URL.
2. User is redirected to the Login page. Both the Username and Password fields are highlighted in red, and the following error message is displayed: "Epic sadface: You can only access '/inventory.html' when you are logged in.".
3. User is redirected to the Login page. Both the Username and Password fields are highlighted in red, and the following error message is displayed: "Epic sadface: You can only access '/cart.html' when you are logged in.".
*/

export default async function (page: Page) {
    const accessUrls = ["/inventory", "/cart"];
    
    for (const url of accessUrls) {
        // 1 2 3
        await page.goto(`https://www.saucedemo.com/${url}.html`);

        await expect(page).toHaveURL("/");
        
        await expect(page.locator(ID_USERNAME)).toContainClass(FORM_INPUT_ERROR);
        await expect(page.locator(FORM_INPUT_ERROR_ICON).nth(0)).toBeVisible();

        await expect(page.locator(ID_PASSWORD)).toContainClass(FORM_INPUT_ERROR);
        await expect(page.locator(FORM_INPUT_ERROR_ICON).nth(1)).toBeVisible();

        await expect(page.locator(ERROR_MESSAGE_CONTAINER)).toBeVisible();
        await expect(page.locator(ERROR_MESSAGE_CONTAINER)).toHaveText(`Epic sadface: You can only access '${url}.html' when you are logged in.`);
    }
}
