import {combineReducers} from 'redux';
import favouriteReducer from "./favourite";
import pageReducer from "./page";
import searchReducer from "./searches";

const allReducers = combineReducers({
    favourite: favouriteReducer,
    page:pageReducer,
    searches:searchReducer
});
export default allReducers