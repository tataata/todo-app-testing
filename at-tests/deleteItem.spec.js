/* eslint-disable no-undef */
import { test, expect } from '@playwright/test';

test('add few todo items and delete one of them', async ({ page }) => {
  // set up
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('write a book');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('sleep');
  await page.getByLabel('Task').press('Enter');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('go home');
  await page.getByRole('button', { name: 'Add' }).click();

  // Assertion: 
  // find tehe one of the tasks and delete it
  // // chain locators to find the right button to click
  await page
    .getByRole('listitem')
    .filter({ hasText: 'go home' })
    .getByRole('button', { name: 'Delete' })
    .click();

});