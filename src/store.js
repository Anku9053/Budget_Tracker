// store/index.js
import {legacy_createStore} from 'redux'
// import budgetReducer from './Redux/reducer';
import budgetReducer from './Redux/reducer';


const store = legacy_createStore(budgetReducer);
export default store;
