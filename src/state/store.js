import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { loggerMiddleware } from 'state/middleware'
import { createReducer } from 'state/reducer'

import { ProductSearch } from 'state/modules/product-search'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [loggerMiddleware, thunkMiddleware]
const asyncReducers = [{ productSearch: ProductSearch }]

const store = createStore(
  createReducer(...asyncReducers),
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

export default store
