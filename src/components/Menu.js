import React from 'react';
import "../styles/menu.css"
import {menu} from "../TextBlocks";
import {withRouter} from "react-router-dom";
import SearchAuto from "./SearchAuto";

const Menu = props => {
    return (
        <div className={'menuContainer'}>
            <div className={'subMenu'}>
                <span className={'menuTitle'}>{menu.title}</span>
                <SearchAuto onClickSearch={val=>props.onClickSearch}/>
            </div>
            <div className={'favButtonContainer'}
                 onClick={_ =>
                    props.history.push("/favourite")
                 }>
                <img alt={''} src={'../../photos/fav.svg'} className={'favIcon'}/>
                <span className={'favTitle'}>{menu.favTitle}
                </span>
            </div>
        </div>
    );
};

export default withRouter(Menu);