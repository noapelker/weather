import React from 'react';
import Main from "./components/Main";
import {useSelector} from "react-redux";
import {ToastProvider} from 'react-toast-notifications'

function App() {
    const darkTheme = useSelector(state => state.themeMode.darkMode);
    return (
        <div className={darkTheme ? 'dark-mode' : "light-mode"}>
            <ToastProvider>
                <Main/>
            </ToastProvider>
        </div>
    );
}

export default App