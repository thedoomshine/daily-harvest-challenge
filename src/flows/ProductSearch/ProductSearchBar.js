/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Button, Svg, TextInput } from 'components'

const searchBarStyles = css`
  display: flex;
  width: 100%;
`

const textIntputStyles = css`
  width: 100%;
  max-width: 32rem;
`

const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  width: 2.375rem;
  padding: 0;
  margin-top: auto;
  margin-left: -1px;

  border: solid 1px var(--black);

  &:hover {
    background-color: var(--white);

    & > svg {
      fill: var(--black);
    }
  }
`

const searchIconStyles = css`
  fill: var(--white);
  height: 1.5rem;
  width: 1.5rem;
`

export const ProductSearchBar = ({ className, onChange, value }) => {
  return (
    <div className={className} css={searchBarStyles}>
      <TextInput css={textIntputStyles} label='Ingredients Search' placeholder='Shop for your favorite organic ingredients...' value={value} onChange={onChange} />
      <Button css={buttonStyles}>
        <Svg css={searchIconStyles} name='search-icon' />
      </Button>
    </div>
  )
}
