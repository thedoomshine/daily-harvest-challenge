import fetch from 'cross-fetch'

const API_URL = 'https://raw.githubusercontent.com/daily-harvest/opportunities/master/web-1/data/'
export const PRODUCT_SEARCH_INGREDIENTS = 'ingredients'
export const PRODUCT_SEARCH_PRODUCTS = 'products'

export const SET_SEARCH = '@@product-search/SET_SEARCH'

export const INGREDIENTS_REQUEST = '@@product-search/INGREDIENTS_REQUEST'
export const INGREDIENTS_REQUEST_SUCCESS = '@@product-search/INGREDIENTS_REQUEST_SUCCESS'
export const INGREDIENTS_REQUEST_FAILTURE = '@@product-search/INGREDIENTS_REQUEST_FAILTURE'

export const PRODUCTS_REQUEST = '@@product-search/PRODUCTS_REQUEST'
export const PRODUCTS_REQUEST_SUCCESS = '@@product-search/PRODUCTS_REQUEST_SUCCESS'
export const PRODUCTS_REQUEST_FAILTURE = '@@product-search/PRODUCTS_REQUEST_FAILTURE'

export const setSearch = (text) => ({
  type: SET_SEARCH,
  text
})

const fetchIngredientsRequest = () => {
  return {
    type: INGREDIENTS_REQUEST
  }
}

const fetchIngredientsSuccess = (response, type) => {
  return {
    type: INGREDIENTS_REQUEST_SUCCESS,
    response
  }
}

const fetchIngredientsFailure = (error) => {
  return {
    type: INGREDIENTS_REQUEST_FAILTURE,
    error
  }
}

export const asyncFetchIngredients = () => {
  return async dispatch => {
    dispatch(fetchIngredientsRequest())
    try {
      const response = await fetch(`${API_URL}${PRODUCT_SEARCH_INGREDIENTS}.json`).then(response => response.json())
      return dispatch(fetchIngredientsSuccess(response))
    } catch (error) {
      return dispatch(fetchIngredientsFailure(error))
    }
  }
}

const fetchProductsRequest = () => {
  return {
    type: PRODUCTS_REQUEST
  }
}

const fetchProductsSuccess = (response) => {
  return {
    type: PRODUCTS_REQUEST_SUCCESS,
    response
  }
}

const fetchProductsFailure = (error) => {
  return {
    type: PRODUCTS_REQUEST_FAILTURE,
    error
  }
}

export const asyncFetchProducts = () => {
  return async dispatch => {
    dispatch(fetchProductsRequest())
    try {
      const response = await fetch(`${API_URL}${PRODUCT_SEARCH_PRODUCTS}.json`).then(response => response.json())
      return dispatch(fetchProductsSuccess(response))
    } catch (error) {
      return dispatch(fetchProductsFailure(error))
    }
  }
}

export const asyncFetchProductsAndIngredients = () => {
  return async dispatch => Promise.all([
    dispatch(asyncFetchIngredients()),
    dispatch(asyncFetchProducts())
  ])
}
