/* eslint-disable no-undef */
import { test, expect } from '@playwright/test';

test('add one todo and edit it', async ({ page }) => {
  // setup
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('sleep');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('listitem').getByRole('textbox').click();
  await page.getByRole('listitem').getByRole('textbox').fill('sleep sweet');
  await page.getByRole('button', { name: 'Save' }).click();
  // const locator = page.locator('.title');
  // await expect(locator).toHaveText(/Welcome, Test User/);
  // await expect(locator).toHaveText(/Welcome, .*/);
  // assertion
  await expect(page.getByText('sleep sweet')).toBeVisible();
});

// This test will reveal a bug in the app. Fix it in Item (also add a test for it in Item.test.js)
test('not edit, just open and close the editor', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Task').fill('edit me');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('listitem').getByRole('textbox').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('edit me')).toBeVisible()
})