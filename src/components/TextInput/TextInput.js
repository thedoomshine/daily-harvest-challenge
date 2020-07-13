/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { generateUniqueId } from 'services'

const defaultTextInputStyles = css`
  display: flex;
  flex-direction: column;

  background-color: transparent;
`

const defaultInputStyles = css`
  margin-top: .5rem;
  padding: .5rem;

  font-size: 1rem;
  border-color: var(--black);
  border-width: 1px;
  outline: 0;
`

const defaultLabelStyles = css`
  cursor: pointer;
  font-size: .8rem;
  font-weight: 800;
  text-transform: uppercase;
`

export default ({
  className,
  inputClassName,
  label,
  labelClassName,
  onChange,
  placeholder,
  required,
  value
}) => {
  // generate a unique Id for labels and text inputs so users dont have to
  const uniqueId = generateUniqueId()
  return (
    <div className={className} css={defaultTextInputStyles}>
      {label && <label className={labelClassName} css={defaultLabelStyles} htmlFor={uniqueId}>{label}</label>}
      <input
        className={inputClassName}
        css={defaultInputStyles}
        id={uniqueId}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type='text'
        value={value}
      />
    </div>
  )
}
