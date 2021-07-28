import { combineReducers } from "redux";
import productReducer from "./shopping";

const rootReducer = combineReducers({
    productReducer,
});

export default rootReducer;