import {combineReducers} from 'redux';
import favouriteReducer from "./favourite";
import pageReducer from "./page";

const allReducers = combineReducers({
    favourite: favouriteReducer,
    page:pageReducer
});
export default allReducers