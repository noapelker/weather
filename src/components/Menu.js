import React from 'react';
import "../styles/menu.css"
import {menu} from "../TextBlocks";
import {withRouter} from "react-router-dom";
import SearchAuto from "./SearchAuto";
import ModeContainer from "./ModeContainer";
import {useSelector} from "react-redux";

const Menu = props => {
    const darkMode = useSelector(store => store.themeMode.darkMode);
    return (
        <div className={'menuContainer ' + (darkMode ? "full-dark-mode" : 'full-light-mode')}>
            <ModeContainer/>
            <div className={'subMenu'}>
                <h1 className={'menuTitle'}>{menu.title}</h1>
                <SearchAuto/>
            </div>
            <div className={'favButtonContainer'}
                 onClick={_ =>
                     props.history.push("/favourite")
                 }>
                <img alt={'Favorite'} src={'photos/fav.svg'}
                     className={"favIcon " + (darkMode ? "imgDark" : "imgLight")}/>
                <span className={'favTitle'}>{menu.favTitle}
                </span>
            </div>
        </div>
    );
};

export default withRouter(Menu);