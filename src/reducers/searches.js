//Handle recent searches
const searchReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_SEARCH":
            return [action.payload, ...state.filter(item => item.AdministrativeArea.ID !== action.payload.AdministrativeArea.ID)].slice(0, 10);
        default:
            return state;
    }
};
export default searchReducer;