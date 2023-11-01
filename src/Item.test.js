import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Item from './Item';
describe ('Item',() => {
  test('renders a delete button for the item', () => {
    render(<Item task={{ task: 'A', id: 1 }} />);
    const text = screen.getByText('Delete');
    expect(text).toBeInTheDocument();
  })

  test('calls the callback function with the id when the delete button of the item is clicked', async () => {
    let deleteItem = jest.fn()
    render(<Item task={{ task: 'A', id: 1 }} deleteItem={deleteItem} />);
    let user = userEvent.setup()
    let button = screen.getByRole('button', { name: /Delete/i })
    await user.click(button)
    expect(deleteItem).toHaveBeenCalledWith(1);
  })
 

  test('renders an edit button for each item in the list', () => {
    render(<Item task={{ task: 'A', id: 1 }} />);
    const text = screen.getByText('Edit');
    expect(text).toBeInTheDocument();
  })

  test('displays a prefilled input field after the edit button is clicked', async () => {
    render(<Item task={{ task: 'A', id: 1 }} />);
    let user = userEvent.setup()
    let editButton = screen.getByRole('button', { name: /Edit/i })
    await user.click(editButton)
    const text = screen.getByRole('textbox', {value:' A'});
    expect(text).toBeInTheDocument();
  })
  
  test('displays a save button after the edit button is clicked', async () => {
    render(<Item task={{ task: 'A', id: 1 }} />);
    let user = userEvent.setup()
    let editButton = screen.getByRole('button', { name: /Edit/i })
    await user.click(editButton)
    const text = screen.getByText('Save');
    expect(text).toBeInTheDocument();
  })

  test('calls the callback function with the updated item when the save button is clicked', async () => {
    const updateItem = jest.fn()
    let testTask = { task: 'A', id: 1 }
    render(<Item task={testTask} updateItem={updateItem} />);
    let user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /Edit/i }))
    // simulat the typing: 
    let input = screen.getByRole('textbox', {value:'A'})
    await user.type(input, 'B')
    // simulat the click on save: 
    await user.click(screen.getByRole('button', { name: /Save/i }))
    // spread in the object and only change the task property to the expected. This will make the test easier to maintain if the strucutre if changes later, and makes it more clear that only one property is changed here
    await expect(updateItem).toHaveBeenCalledWith({...testTask, task: 'AB'})
  })

 // Add this test after the acceptance test reveals that this was a bug. 
  test('does not call the the callback function when save is clicked and there was no change to the item', async () => {
    const updateItem = jest.fn()
    render(<Item task={{ task: 'A', id: 1 }} updateItem={updateItem} />);
    let user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /Edit/i }))
    // simulat the click, no typing: 
    let input = screen.getByRole('textbox', {value:'A'})
    await user.click(input)
    // simulat the click on save: 
    await user.click(screen.getByRole('button', { name: /Save/i }))
    await expect(updateItem).not.toHaveBeenCalled()
  })
})