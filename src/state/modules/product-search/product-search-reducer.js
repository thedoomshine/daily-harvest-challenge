import { unionBy } from 'lodash'

import {
  INGREDIENTS_REQUEST,
  INGREDIENTS_REQUEST_SUCCESS,
  INGREDIENTS_REQUEST_FAILTURE,
  PRODUCTS_REQUEST,
  PRODUCTS_REQUEST_SUCCESS,
  PRODUCTS_REQUEST_FAILTURE,
  SET_SEARCH
} from './product-search-actions'

const initialState = {
  search: '',
  ingredients: {
    error: '',
    loading: false,
    loaded: false,
    data: []
  },
  products: {
    error: '',
    loading: false,
    loaded: false,
    data: []
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH:
      return Object.assign({}, state, {
        search: action.text
      })
    case INGREDIENTS_REQUEST:
      return Object.assign({}, state, {
        ingredients: {
          error: '',
          loading: true
        }
      })
    case INGREDIENTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        ingredients: {
          data: unionBy(state.ingredients.data, action.response, 'id'),
          error: '',
          loaded: true,
          loading: false
        }
      })
    case INGREDIENTS_REQUEST_FAILTURE:
      return Object.assign({}, state, {
        ingredients: {
          error: action.error,
          loaded: true,
          loading: false
        }
      })
    case PRODUCTS_REQUEST:
      return Object.assign({}, state, {
        products: {
          error: '',
          loading: true
        }
      })
    case PRODUCTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        products: {
          error: '',
          loaded: true,
          loading: false,
          data: unionBy(state.products.data, action.response, 'id')
        }
      })
    case PRODUCTS_REQUEST_FAILTURE:
      return Object.assign({}, state, {
        products: {
          error: action.error,
          loaded: true,
          loading: false
        }
      })
    default:
      return state
  }
}
