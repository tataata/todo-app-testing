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

  // integratoin test: testing that 3 components work together smoothly
  test('adds typed item to the empty list', async () => {
    render(<App />);
    // act -- typing, invoking userEvent.setup() before the component is rendered
    let user = userEvent.setup();
    // simulating typing
    let input = screen.getByLabelText('Task')
    await user.type(input, 'love')
    // simulate the click
    await user.click(screen.getByRole('button', {name: /add/i}))
    // assertion
    const emptyListText = screen.getByText('love')
    expect(emptyListText).toBeInTheDocument()
  })


  test('adds item to a not empty list when input field is used', async () => {
    render (<App />)
    // set up user and do actions
    let user = userEvent.setup()
    let input = screen.getByLabelText('Task')
    // Add first item
    await user.type(input, 'A')
    await user.click(screen.getByRole('button', { name: /Add/i }))
    // Add second item
    await user.type(input, 'B')
    await user.click(screen.getByRole('button', { name: /Add/i }))
    // check the first item is present:
    let listItemA  = screen.getByText('A')
    expect(listItemA).toBeInTheDocument()
    // check the second item is present:
    let listItemB = screen.getByText('B')
    expect(listItemB).toBeInTheDocument()
  })
  
  // do this test as an assignmet!
  test('does not display headline for empty list when an item is added', async () => {
    render(<App />);
    let user = userEvent.setup()
    // simulat the typing: 
    let input = screen.getByLabelText('Task')
    await user.type(input, 'a')
    // simulate the click: 
    await user.click(screen.getByRole('button', { name: /Add/i }))
    // The methods queryBy... are used to test for missing elements
    const emptyListText = screen.queryByText('No tasks')
    expect(emptyListText).not.toBeInTheDocument()
  })

  test('removes the item from the list on click /delete/ button', async () => {
    // arrange
    render(<App />)
    // act -- add item in the list, and remove it after
    // initialise the user events
    let user = userEvent.setup()
    // simulating typing
    let input = screen.getByLabelText('Task')
    await user.type(input, 'sleep')
    // simulating the clicks
    await user.click(screen.getByRole('button', { name: /Add/i }))
    let buttons = screen.getAllByRole('button', { name: /Delete/i })
    // if useing variable button: simulate the click on the first button
    // await user.click(buttons[0])
    await user.click(screen.getByRole('button', { name: /Delete/i }))
    // assertion
    let removedItem = screen.queryByText('sleep')
    expect(removedItem).not.toBeInTheDocument()
  })
})
