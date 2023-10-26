import {  render, screen } from '@testing-library/react';
import List from './List';
import userEvent from '@testing-library/user-event';

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
    render(<List tasks={[ {task: 'A', id: 1} ]} />)
    const text = screen.getByText('Delete');
    expect(text).toBeInTheDocument();
  })

  test('renders a delete buttons for each item in the list of two tasks', () => {
    render(<List tasks={[ {task: 'A', id: 1}, {task: 'B', id: 2} ]} />)
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    expect(deleteButtons).toHaveLength(2);
  })

  // callbacks
  test('calls the callback function click on the /delete/ button removes the corresponding task', async () => {
    let removeFromList = jest.fn()
    render(<List tasks={[{task: 'A', id: 19}]} removeFromList={removeFromList} />)
    // initialise user events
    let user = userEvent.setup()
    // find all buttons
    let buttons = screen.getAllByRole('button', { name: /delete/i })
    // simulate click
    await user.click(buttons[0])
    expect(removeFromList).toHaveBeenCalledWith(19)
  })
})