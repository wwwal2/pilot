import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './Reducers';

function configureStore(initialState={}) {
    return createStore(combineReducers, initialState, applyMiddleware(thunk))
};

export default configureStore;