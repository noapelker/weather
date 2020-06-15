import {home} from "../TextBlocks";

const pageReducer = (state=home.defaultCity,action) => {
    console.log(action);
    switch (action.type) {
        case "SET_PAGE":
          return action.payload;
        default:
            return state;
    }
};
export default pageReducer;