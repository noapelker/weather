export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
    }
};

export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const convertTemperature = val => {
    return Math.round((val - 32) * (5 / 9));
}

export const API_KEY = "UsrZvPwtSwuwBiIcGXy2SIacQ4IanDO1";

const dataURL = "https://dataservice.accuweather.com";

export const getData = (endpoint) =>
    fetch(dataURL + '/' + endpoint
        , {
            method: "GET"
        }).then(data => data.json()).then(data => {
            return data
        }
    );