import { render, screen } from '@testing-library/react';

import List from './List';

describe('List', () => {
  test('renders a heading', () => {
    // Arrange: set up: render the component with the same prop structure as you plan to use!
    render(<List tasks={[{ task: 'A' , id: 1}]} />);
    // Act: Find the element. This selector looks for a h1-h6. Add a name to be able to distinguish between different headings. OR use text as a matcher
    // const header = screen.getByRole('heading', {name: /These are your tasks/i});
    const listHeader = screen.getByText('These are your tasks');
    // Assert:
    expect(listHeader).toBeInTheDocument();
  })

  test('renders one task', () => {
    render(<List tasks={[{ task: 'A', id: 1 }]} />);
    const todoA = screen.getByText('A');
    expect(todoA).toBeInTheDocument();
  })

  test('renders two task', () => {
    render(<List tasks={[{ task: 'A', id: 1 }, { task: "B" , id: 2}]} />);
    const todoB = screen.getByText('B');
    expect(todoB).toBeInTheDocument();
    const todoA = screen.getByText('A');
    expect(todoA).toBeInTheDocument();
  })

  test('renders text if the list is empty', () => {
    render(<List tasks={[]} />);
    const text = screen.getByText('No tasks');
    expect(text).toBeInTheDocument();
  })
})