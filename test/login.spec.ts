import { test } from "@playwright/test";
import TC1 from "./testCases/TC1";
import TC2 from "./testCases/TC2";

test("TC1: Verify successful login with valid standard_user credentials", async ({page}) => {
    await TC1(page);
});

test("TC2: Verify the Login button can be activated using the Enter key", async ({page}) => {
    await TC2(page);
});
