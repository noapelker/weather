import {SET_MODE, TEMP_PREF} from "../constants";

const modeReducer = (state = {darkMode: false, showCelcius: true}, action) => {
    switch (action.type) {
        case SET_MODE:
            return {...state, darkMode: !state.darkMode};
        case TEMP_PREF:
            return {...state, showCelcius: !state.showCelcius};
        default:
            return state;
    }

};
export default modeReducer;