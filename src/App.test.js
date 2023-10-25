import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './App';
describe('App component suite', () => {
  test('renders headline of the app', () => {
    render(<App />);
    const header = screen.getByRole('heading', {name: /My To Do List/i});
    expect(header).toBeInTheDocument();
  })

  test('renders the List component', () => {
    render(<App />);
    const listHeading = screen.getByText('These are your tasks')
    expect(listHeading).toBeInTheDocument()

  })

  // // integration test: testing that 3 components work together
  // test('adds typed item to the empty list', async () => {
  //   render(<App />);
  //   let user = userEvent.setup()
  //   // simulat the typing: 
  //   let input = screen.getByLabelText('Task')
  //   await user.type(input, 'a')
  //   // simulat the click: 
  //   await user.click(screen.getByRole('button', { name: /Add/i }))
  //   const emptyListText = screen.getByText('a')
  //   expect(emptyListText).toBeInTheDocument()
  // })

  // test('adds item to a not empty list when input field is used', async () => {
  //   render (<App />)
  //   // set up user and do actions
  //   let user = userEvent.setup()
  //   let input = screen.getByLabelText('Task')
  //   // Add first item
  //   await user.type(input, 'A')
  //   await user.click(screen.getByRole('button', { name: /Add/i }))
  //   // Add second item
  //   await user.type(input, 'B')
  //   await user.click(screen.getByRole('button', { name: /Add/i }))
  //   // check the first item is present:
  //   let listItemA  = screen.getByText('A')
  //   expect(listItemA).toBeInTheDocument()
  //   // check the second item is present:
  //   let listItemB = screen.getByText('B')
  //   expect(listItemB).toBeInTheDocument()
  // })

  // // do this test as an assignmet!
  // test('does not display text for empty list when an item is added', async () => {
  //   render(<App />);
  //   let user = userEvent.setup()
  //   // simulat the typing: 
  //   let input = screen.getByLabelText('Task')
  //   await user.type(input, 'a')
  //   // simulat the click: 
  //   await user.click(screen.getByRole('button', { name: /Add/i }))
  //   // The methods queryby... are used to test for missing elements
  //   const emptyListText = screen.queryByText('No tasks')
  //   expect(emptyListText).not.toBeInTheDocument()
  // })

})
