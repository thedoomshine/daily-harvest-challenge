/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { ProductListItem } from './ProductListItem'

const productListStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 1rem;
  list-style: none;
`

export const ProductList = ({ products = [], ingredients = [] }) => {
  const getIngredients = (ingredientIds) => {
    return ingredientIds?.map(id => {
      return ingredients?.find(ingredient => ingredient?.id === id)
    })
  }

  return (
    <ul css={productListStyles}>
      {!products && (
        <div>
          That search returned nothing.
        </div>
      )}
      {products.map(({ id, name, collection, ingredientIds, image }) => (
        <ProductListItem
          collection={collection}
          image={image}
          ingredients={getIngredients(ingredientIds)}
          key={id}
          name={name}
        />
      ))}
    </ul>
  )
}
