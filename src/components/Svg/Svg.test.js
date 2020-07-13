import React from 'react'
import { render } from '@testing-library/react';

import Svg from './Svg'

it('renders with the correct icon', () => {
  render(
    <Svg name="search-icon" />
  )

  expect(document.querySelector('svg')).toBeInTheDocument()
})

it('renders nothing if the icon doesnt exists in the library', () => {
  render(
    <Svg name="nonsense-icon" />
  )
  expect(document.querySelector('svg')).not.toBeInTheDocument()
})