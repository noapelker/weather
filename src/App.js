import React from 'react';
import Main from "./components/Main";
import {useSelector} from "react-redux";

function App(){
    const darkTheme = useSelector(state => state.themeMode);
    return (
        <div className={darkTheme?'dark-mode':"light-mode"}>
            <Main/>
        </div>
    );
}

export default App