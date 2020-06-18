import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducer from './reducers'
import {loadFromLocalStorage, saveToLocalStorage} from "./api";

const persistedState = loadFromLocalStorage();
const store = createStore(allReducer, persistedState);

store.subscribe(() => {
    saveToLocalStorage({
        favourite: store.getState().favourite,
        searches: store.getState().searches,
        page:store.getState().page
    });
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
