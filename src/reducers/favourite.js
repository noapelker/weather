const favouriteReducer = (state=[],action) => {
    switch (action.type) {
        case "REMOVE":
            const index=state.findIndex(state => state.AdministrativeArea.ID === action.payload);
            const arr= [...state];
            arr.splice(index,1);
            return arr;
        case "ADD":
            return [...state, action.payload];
        default:
            return state;
    }
};
export default favouriteReducer;