const modeReducer = (state=false, action) => {
    switch (action.type) {
        case "SET_MODE":
            return !state;
        default:
            return state;
    }

};
export default modeReducer;