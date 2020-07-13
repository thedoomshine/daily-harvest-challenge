/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Svg } from 'components'

const navStyles = css`
  display: flex;
  justify-content: center;
  padding: 2rem;
`

const logoStyles = css`
  height: 1rem;
`

export default () => {
  return (
    <nav css={navStyles}>
      <Svg css={logoStyles} name='Daily-Harvest' ariaLabel='Daily Harvest logo' />
    </nav>
  )
}
