import { test, expect } from '@playwright/test';

test('test adding and editing of one item', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('sleep');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('listitem').getByRole('textbox').click();
  await page.getByRole('listitem').getByRole('textbox').fill('sleep more');
  await page.getByRole('button', { name: 'Save' }).click();
  // assertion
  await expect(page.getByText('sleep more')).toBeVisible();
});

test('test if item saves correctly when edit was open but no changes were made', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('sleep');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});