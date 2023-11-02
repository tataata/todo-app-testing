import { test, expect } from '@playwright/test';

test('add one item and remove it', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('sleep');
  await page.getByLabel('Task').press('Tab');
  await page.getByRole('button', { name: 'Add' }).press('Enter');
  await page.getByRole('button', { name: 'Delete' }).click();
  // assertion
  await expect(page.getByText('No tasks')).toBeVisible();
});

test('delete one task from the list of three todos', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('sleep');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('eat');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('make a call');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('listitem')
            .filter({ hasText: 'make a call' })
            .getByRole('button', { name: 'Delete' }).click();
  // test that remaing todos are on the screen
  await expect(page.getByText('sleep')).toBeVisible();
  await expect(page.getByText('eat')).toBeVisible();
  // test that 'make a call' is not present in hte list of todo
  await expect(page.getByRole('listitem')
                   .filter({ hasText: 'make a call' })).not.toBeVisible();
});