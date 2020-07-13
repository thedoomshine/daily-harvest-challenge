/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const defaultButtonStyles = css`
  display: flex;
  padding: .5rem 2rem;

  border: 0;
  background-color: var(--primary);
  color: var(--secondary);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`

export default ({ className, children, onClick }) => {
  return (
    <button css={defaultButtonStyles} className={className} type='button' onClick={onClick}>
      {children}
    </button>
  )
}
