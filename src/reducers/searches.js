//Handle recent searches
const searchReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_SEARCH":
            const index = state.findIndex(state => state.AdministrativeArea.ID === action.payload.AdministrativeArea.ID);
            let arr;
            if (index === -1) {
                state.unshift(action.payload);
                if (state.length >= 10)
                    state.pop();
            } else {
                arr=state.filter(item=>item.AdministrativeArea.ID!==action.payload.AdministrativeArea.ID)
                arr.unshift(action.payload);
                return arr;
            }
            return state;
        default:
            return state;
    }
};
export default searchReducer;