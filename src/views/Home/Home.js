/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { ProductSearch } from 'flows'

const style = css`
  margin: auto;
  padding: 1rem;
  max-width: 96rem;
  width: 100%;
`

const Home = () => (
  <div css={style}>
    <ProductSearch />
  </div>
)

export default Home
