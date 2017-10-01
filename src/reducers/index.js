import { combineReducers } from 'redux';
import myRedu from './myRedu';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
    myRedu,
    routing: routerReducer
})

export default reducers