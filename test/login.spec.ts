import { test } from "@playwright/test";
import TC1 from "./testCases/TC1";
import TC2 from "./testCases/TC2";
import TC3 from "./testCases/TC3";
import TC4 from "./testCases/TC4";
import TC5 from "./testCases/TC5";
import TC6 from "./testCases/TC6";
import TC7 from "./testCases/TC7";
import TC8 from "./testCases/TC8";

test("TC1: Verify successful login with valid standard_user credentials", async ({page}) => {
    await TC1(page);
});

test("TC2: Verify the Login button can be activated using the Enter key", async ({page}) => {
    await TC2(page);
});

test("TC3: Verify login with valid username and invalid password", async ({page}) => {
    await TC3(page);
});

test("TC4: Verify login with invalid username and valid password", async ({page}) => {
    await TC4(page);
});

test("TC5: Verify login with invalid username and invalid password", async ({page}) => {
    await TC5(page);
});

test("TC6: Verify login with empty username", async ({page}) => {
    await TC6(page);
});

test("TC7: Verify login with empty password", async ({page}) => {
    await TC7(page);
});

test("TC8: Verify login with both username and password empty", async ({page}) => {
    await TC8(page);
});
