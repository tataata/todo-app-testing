import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddItem from './AddItem';

describe('AddItem component test suite', () => {
  test('renders a heading of the component', () => {
    // arrange
    render(<AddItem />);
    // act -- nothing to act on
    // assert
    const inputHeader = screen.getByText('please enter your task', {exact: false});
    expect(inputHeader).toBeInTheDocument();
  })

  test('renders the input field', () => {
    render(<AddItem />);
    const inputField = screen.getByLabelText('Task');
    expect(inputField).toBeInTheDocument();
  })

  test('renders the button', () => {
    render(<AddItem />);
    // query gets an element containing text that matches the regex /add/i (where `i` means ignore case).
    let button = screen.getByRole('button', {name: /add/i })
    expect(button).toBeInTheDocument();
  })

  test('calls the callback addToList with the typed input on click', async () => {
    // here you need to address how to mock a function using jset.fn() and pass the function as a prop
    // replace this with vi.fn() to match the vite setup
    let addToList = jest.fn()
    render(<AddItem addToList={addToList}/>);
    //  we also need userEvents to simulat the typing and clicking 
    let user = userEvent.setup()
    // simulat the typing: 
    let input = screen.getByLabelText('Task')
    await user.type(input, 'a')
    // simulat the click: 
    await user.click(screen.getByRole('button', { name: /Add/i }))
    // expect the callback to have been called with the inputed value
    expect(addToList).toHaveBeenCalledWith('a')
  })

  test('resets the input field when the button is clicked', async () => {
    // replace this with vi.fn() to match the vite setup
    let addToList = jest.fn()
    render(<AddItem addToList={addToList} />)
    let user = userEvent.setup()
    let input = screen.getByLabelText('Task')
    await user.type(input, 'a')
    await user.click(screen.getByRole('button', {name: /Add/i }))
    expect(input).not.toHaveValue()
  })
})