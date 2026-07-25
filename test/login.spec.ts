import { test } from '@playwright/test';
import TC1 from "./testCases/TC1";

test('TC1: Verify successful login with valid standard_user credentials', async ({page}) => {
    await TC1(page);
});
