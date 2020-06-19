import React from 'react';
import "../styles/mode.css"
import {useDispatch, useSelector} from "react-redux";
import {setMode, setUnitPref} from "../actions";

const ModeContainer = _ => {
    const dispatch = useDispatch();
    const darkMode = useSelector(store => store.themeMode.darkMode)
    const showCelcius = useSelector(store => store.themeMode.showCelcius)
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

            <span style={{marginLeft: 30}}>F</span>
            <label className="switch" style={{marginLeft: 16, marginRight: 16}}>
                <input type="checkbox" defaultChecked={showCelcius} onClick={_ => {

                    //Change theme mode
                    dispatch(setUnitPref())
                }}/>
                <span className="slider round sliderBack"/>
            </label>
            <span>ºC</span>
        </div>
    );
};

export default ModeContainer;