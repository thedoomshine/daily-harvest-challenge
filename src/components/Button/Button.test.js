import React from 'react'
import { fireEvent, render } from '@testing-library/react';

import Button from './Button'

it('renders with child text', () => {
  const handleClick = jest.fn()
  const text = 'Hello World'
  const { getByText } = render(
    <Button onClick={handleClick}>{text}</Button>
  )

  expect(getByText(text)).toBeInTheDocument()
})

it('fire an event when clicked', () => {
  const handleClick = jest.fn()
  const text = 'Hello World'
  const { getByText } = render(
    <Button onClick={handleClick}>{text}</Button>
  )

  fireEvent.click(getByText(text))

  expect(handleClick).toHaveBeenCalledTimes(1)
})