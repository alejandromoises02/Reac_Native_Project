import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import CategoryReducer from './reducers/category.reducer';
import ServicesReducer from './reducers/services.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  services: ServicesReducer,
})

export default createStore(RootReducer)