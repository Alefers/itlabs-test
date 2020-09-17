import {combineReducers, createStore} from "redux";
import pageReducer from "./reducers/page-reducer";


let reducers = combineReducers({
    pageReducer: pageReducer
});

let store = createStore(reducers);

export default store;