import {  render, screen } from '@testing-library/react';
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

})