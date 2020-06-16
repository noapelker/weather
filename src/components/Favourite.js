import React from 'react';
import "../styles/favourite.css"
import { useSelector} from "react-redux";
import Fav from "./Fav";
import {favorite} from "../TextBlocks";

const Favourite = props => {
    const favourite = useSelector(state => state.favourite);


    return (
        <div className={'favouriteContainer'}>
            <span className={'favMainTitle'}>{favorite.mainTitle}</span>
            <img alt={''} src={"../../photos/city.jpeg"} className={'backImage'}/>
                <div className={'favItemContainer'}>
                    {favourite && favourite.length > 0 ?
                        favourite.map((item, key) => <Fav key={key} data={item}/>) :
                        <div className={'noDataContainer'}>
                        <span className={'favouriteTitle'}>{favorite.noFav}</span></div>}

                        </div>
            <button className={'backToHome'} onClick={_ => props.history.push("/")
            }>{favorite.backHome}
            </button>
        </div>
    );
};

export default Favourite;