import {combineReducers} from 'redux';
import favouriteReducer from "./favourite";
import pageReducer from "./page";
import searchReducer from "./searches";
import modeReducer from "./mode";

const allReducers = combineReducers({
    favourite: favouriteReducer,
    page:pageReducer,
    searches:searchReducer,
    themeMode:modeReducer
});
export default allReducers