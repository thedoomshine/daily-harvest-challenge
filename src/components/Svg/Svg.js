import React from 'react'
import SvgLibrary from './SvgLibrary'

export default ({ className, name, role = 'img', ariaLabel }) => {
  if (!SvgLibrary[name]) { return false }
  const group = SvgLibrary[name].group
  const viewBox = SvgLibrary[name].viewBox
  return (
    <svg aria-label={ariaLabel} className={className} xmlns='http://www.w3.org/2000/svg' role={role} viewBox={viewBox}>
      {group}
    </svg>
  )
}
