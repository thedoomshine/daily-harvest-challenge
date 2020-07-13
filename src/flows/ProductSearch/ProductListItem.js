/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Image } from 'components'

const listItemStyles = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1rem;
  max-width: 44rem;
  min-width: 10rem;

  position: relative;
`

const itemImageStyles = css`
  flex: 0 0 auto;
  height: 16rem;
  width: 16rem;
`

const itemDetails = css`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  min-width: 16rem;
  width: calc(100% - 16rem);
`

const itemCollectionStyles = css`
  font-size: .8rem;
  font-weight: 900;
  text-transform: uppercase;
`

const itemNameStyles = css`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: .125em;
`

const ingredientsListStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: .5rem;
  list-style: none;
`

const ingredientsListItemStyles = css`
  font-family: var(--font-family-monospace);
  font-size: .8rem;
  margin-top: .5rem;
  margin-right: .5rem;
  width: 48%;
`

export const ProductListItem = ({ name, collection, ingredients, image }) => {
  return (
    <li css={listItemStyles}>
      <Image css={itemImageStyles} url={image.url} />
      <div css={itemDetails}>
        <h3 css={itemCollectionStyles}>{collection}</h3>
        <h2 css={itemNameStyles}>{name}</h2>
        <ul css={ingredientsListStyles}>
          {!!ingredients && ingredients.map(ingredient => (
            <li
              css={ingredientsListItemStyles}
              key={ingredient.id}
            >{ingredient.name}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
