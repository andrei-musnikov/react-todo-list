import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

const initialState = {}

const middleware = [thunk]

export const configureStore = () => createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)