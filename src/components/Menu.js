import React from 'react';
import "../styles/menu.css"
import {menu} from "../TextBlocks";
import {withRouter} from "react-router-dom";
import SearchAuto from "./SearchAuto";

const Menu = props => {
    return (
        <div className={'menuContainer'}>
            <div className={'subMenu'}>
                <h1 className={'menuTitle'}>{menu.title}</h1>
                <SearchAuto onClickSearch={val => props.onClickSearch}/>
            </div>
            <div className={'favButtonContainer'}
                 onClick={_ =>
                     props.history.push("/favourite")
                 }>
                <img alt={'Favorite'} src={'../../photos/fav.svg'} className={'favIcon'}/>
                <span className={'favTitle'}>{menu.favTitle}
                </span>
            </div>
        </div>
    );
};

export default withRouter(Menu);