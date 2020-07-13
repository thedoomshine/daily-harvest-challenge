import React from 'react'
import { fireEvent, render } from '@testing-library/react';

import TextInput from './TextInput'

it('renders a label when provided', () => {
  const handleChange = jest.fn()
  const text = 'Hello World'
  const { getByLabelText } = render(
    <TextInput label={text} onClick={handleChange}>{text}</TextInput>
  )

  expect(getByLabelText(text)).toBeInTheDocument()
})

it('does not render a label when not provided', () => {
  const handleChange = jest.fn()
  const text = 'Hello World'
  const { getByLabelText } = render(
    <TextInput onClick={handleChange}>{text}</TextInput>
  )

  expect(() => getByLabelText(text)).toThrow()
})

it('changes the value with onChange prop', () => {
  const handleChange = jest.fn()
  const text = 'Hello World'
  const { getByPlaceholderText } = render(
    <TextInput onChange={handleChange} placeholder="placeholder">{text}</TextInput>
  )

  fireEvent.change(getByPlaceholderText('placeholder'), {
    target: { value: 'new value' }
  });

  expect(handleChange).toHaveBeenCalledTimes(1)
})