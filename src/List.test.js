import {  render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import List from './List';

describe('List component test suite', () => {
  test('renders a heading', () => {
    // Arrange: render the component with the same prop structure as you plan to use
    render(<List tasks={ [{task: 'A' }, {task: "B" }]} />);
    // Act: Find the element. This selector looks for a h1-h6
    const header = screen.getByRole('heading');
    // Assert:
    expect(header).toBeInTheDocument();
  })
 
  test('renders one task', () => {
    render(<List tasks={[{task: 'A' }]} />);
    const todoA = screen.getByText('A');
    expect(todoA).toBeInTheDocument();
  })

  test('renders two task', () => {
    render(<List tasks={[{task: 'A' }, {task: "B" }]} />);
    const todoB = screen.getByText('B');
    expect(todoB).toBeInTheDocument();
  })

  test('renders /no tasks/ text if the list is empty', () => {
    render(<List tasks={[]} />);
    const text = screen.getByText('No tasks');
    expect(text).toBeInTheDocument();
  })

  test('renders a delete button for each item in the list', () => {
    render(<List tasks={[{task: 'A', id: 1}]} />);
    const text = screen.getByText('Delete');
    expect(text).toBeInTheDocument();
  })

  test('calls the callback function with the first id when the delete button of the first item is clicked', async () => {
    let removeFromList = jest.fn()
    render(<List tasks={[{task: 'A', id: 1}]} removeFromList={removeFromList} />)
    // initialise the user events
    let user = userEvent.setup()
    // find all buttons
    let buttons = screen.getAllByRole('button', { name: /Delete/i })
    // simulate the click
    await user.click(buttons[0])
    expect(removeFromList).toHaveBeenCalledWith(1)
  })

  test('calls the callback function with the second id when the delete button of the second item is clicked', async () => {
    let removeFromList = jest.fn()
    render(<List tasks={[{task: 'A', id: 1}, {task: 'B', id: 2}]} removeFromList={removeFromList} />);
    let user = userEvent.setup()
    // find all buttons
    let buttons = screen.getAllByRole('button', { name: /Delete/i })
    // simulat the click on the first button
    await user.click(buttons[1])
    expect(removeFromList).toHaveBeenCalledWith(2);
  })
})