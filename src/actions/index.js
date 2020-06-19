export const remove = value => {
    return {
        type: "REMOVE",
        payload: value
    }
};
export const add = value => {
    return {
        type: "ADD",
        payload: value
    }
};
export const setPage = value => {
    return {
        type: "SET_PAGE",
        payload: value
    }
};
export const addSearch = value => {
    return {
        type: "ADD_SEARCH",
        payload: value
    }
};
export const setMode = value => {
    return {
        type: "SET_MODE",
        payload:value
    }
};

