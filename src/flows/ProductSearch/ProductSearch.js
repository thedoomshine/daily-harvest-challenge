/** @jsx jsx */
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { jsx, css } from '@emotion/core'

import { Button, LoadingSpinner } from 'components'

import { ProductList } from './ProductList'
import { ProductSearchBar } from './ProductSearchBar'

import {
  asyncFetchProductsAndIngredients,
  asyncFetchProducts,
  asyncFetchIngredients,
  getFilteredProducts,
  setSearch
} from 'state/modules/product-search'

const productSearchStyles = css`
  display: flex;
  flex-direction: column;
`

const searchResultHeaderStyles = css`
  margin-top: 1rem;
  margin-left: auto;
  text-align-right;

  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 900;
`

const errorMessageStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 24rem;
  margin: auto;

  color: var(--red);
`

const errorButtonStyles = css`
  margin-top: 1rem;
`

const loadingSpinnerStyles = css`
  margin: 2rem auto;
`

const UnconnectedProductSearch = ({
  fetchIngredients,
  fetchProducts,
  fetchProductsAndIngredients,
  filteredProducts = [],
  handleSetSearch,
  ingredients = [],
  ingredientsError = '',
  ingredientsLoaded = false,
  ingredientsLoading = false,
  products = [],
  productsError = '',
  productsLoaded = false,
  productsLoading = false,
  search = ''
}) => {
  const isLoading = ingredientsLoading || productsLoading
  const isLoaded = ingredientsLoaded || productsLoaded
  const hasError = ingredientsError || productsError

  useEffect(() => {
    if (!isLoading && !isLoaded) {
      fetchProductsAndIngredients()
    }
  }, [isLoading, isLoaded, fetchProductsAndIngredients])

  const retry = () => {
    if (ingredientsError && productsError) {
      return fetchProductsAndIngredients()
    }

    if (ingredientsError && !productsError) {
      return fetchIngredients()
    }

    if (!ingredientsError && productsError) {
      return fetchProducts()
    }
  }

  return (
    <div css={productSearchStyles}>
      {hasError &&
        <div css={errorMessageStyles}>
          <p>An error has occured. Please try again.</p>
          <Button css={errorButtonStyles} onClick={retry}>Retry</Button>
        </div>}
      <ProductSearchBar value={search} onChange={(event) => handleSetSearch(event.target.value)} />
      {isLoading && <LoadingSpinner css={loadingSpinnerStyles} />}
      <h2 css={searchResultHeaderStyles}>Search Results ({filteredProducts.length})</h2>
      <ProductList products={filteredProducts} ingredients={ingredients} />
    </div>
  )
}

const mapStateToProps = ({ productSearch }) => ({
  filteredProducts: getFilteredProducts({
    ingredients: productSearch.ingredients.data,
    products: productSearch.products.data,
    search: productSearch.search
  }),
  ingredients: productSearch.ingredients?.data,
  ingredientsLoading: productSearch.ingredients?.loading,
  ingredientsLoaded: productSearch.ingredients?.loaded,
  ingredientsError: productSearch.ingredients?.error,
  products: productSearch.products?.data,
  productsLoading: productSearch.products?.loading,
  productsLoaded: productSearch.products?.loaded,
  productsError: productSearch.products?.error,
  search: productSearch.search
})

const mapDispatchToProps = dispatch => ({
  fetchProductsAndIngredients: () =>
    dispatch(asyncFetchProductsAndIngredients()),
  fetchIngredients: () =>
    dispatch(asyncFetchIngredients()),
  fetchProducts: () =>
    dispatch(asyncFetchProducts()),
  handleSetSearch: (value) =>
    dispatch(setSearch(value))
})

const ProductSearch = connect(mapStateToProps, mapDispatchToProps)(UnconnectedProductSearch)

export default ProductSearch
