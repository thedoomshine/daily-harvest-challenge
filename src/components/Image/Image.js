/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const imageStyles = css`
  display: block;
`

export default ({ className, alt, url }) => {
  return (
    <img className={className} css={imageStyles} src={url} alt={alt} />
  )
}
