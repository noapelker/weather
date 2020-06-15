import React from 'react';
import "../styles/favourite.css"
import {useSelector} from "react-redux";
import Fav from "./Fav";

const Favourite = props => {
    const favourite = useSelector(state => state.favourite);

    return (
        <div className={'favouriteContainer'}>
            <div className={'favItemContainer'}>
            {favourite && favourite.length > 0 ?
                favourite.map((item, key) => <Fav key={key} data={item}/>) :
                <span className={'favouriteTitle'}>No Favourite</span>}
            </div>
            <button className={'backToHome'} onClick={_ => props.history.push("/")
            }>Back To Home Page
            </button>
        </div>
    );
};

export default Favourite;