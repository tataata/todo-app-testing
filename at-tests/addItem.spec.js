/* eslint-disable no-undef */
import { test, expect } from '@playwright/test';

test('display the starting page of the to do app and add one item', async ({ page }) => {
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  // Check the tab title
  await expect(page).toHaveTitle('React App')
  // check that we see the header
  await expect(page.locator('h1')).toHaveText('My To Do List')
  // in the beginning the page should be empty
  await expect(page.locator('.List > p')).toHaveText('No tasks')
  // add new task
  await page.getByLabel('Task').click();
  await page.getByLabel('Task').fill('add new todo');
  await page.getByLabel('Task').press('Tab');
  await page.getByRole('button', { name: 'Add' }).press('Enter');
  // check created item: Here I have added a <span> in the list item (for styling and to locate the item )
  await expect(page.locator('.List > .todo-item')).toHaveText('add new todo')
});