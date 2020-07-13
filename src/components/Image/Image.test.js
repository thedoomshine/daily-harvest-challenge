import React from 'react'
import { render } from '@testing-library/react';

import Image from './Image'

it('renders the image', () => {
  const url = 'http://placekitten.com/200/300'
  const alt = 'a very nice kitten'

  render(<Image url={url} alt={alt} />)

  expect(document.querySelector('img')).toHaveAttribute('src', url)
  expect(document.querySelector('img')).toHaveAttribute('alt', alt)
})