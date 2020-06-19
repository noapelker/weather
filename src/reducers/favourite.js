import {ADD, REMOVE} from "../constants";

const favouriteReducer = (state=[],action) => {
    switch (action.type) {
        case REMOVE:
            return state.filter(item => item.AdministrativeArea.ID !== action.payload);
        case ADD:
            return [...state, action.payload];
        default:
            return state;
    }
};
export default favouriteReducer;