import React from 'react';
import "../styles/mode.css"
import {useDispatch, useSelector} from "react-redux";
import {setMode} from "../actions";

const ModeContainer = _ => {
    const dispatch = useDispatch();
    const darkMode = useSelector(store => store.themeMode)
    return (
        <div className={'modeContainer'}>
            <img alt={'light'} src={'photos/lightMode.svg'}
                 className={'modeImg ' + (darkMode ? "imgDark" : "imgLight")}/>
            <label className="switch">
                <input type="checkbox" defaultChecked={darkMode} onClick={_ => {

                    //Change theme mode
                    dispatch(setMode())
                }}/>
                <span className="slider round sliderBack"/>
            </label>
            <img alt={'dark'} src={'photos/darkMode.svg'}
                 className={'modeImg ' + (darkMode ? "imgDark" : "imgLight")}/>

        </div>
    );
};

export default ModeContainer;