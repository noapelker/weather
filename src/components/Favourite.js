import React from 'react';
import "../styles/favourite.css"
import {useSelector} from "react-redux";
import Fav from "./Fav";
import {favorite} from "../TextBlocks";

const Favourite = props => {
    const favourite = useSelector(state => state.favourite);
    const darkMode = useSelector(state => state.themeMode);
    return (
        <div className={'favouriteContainer'}>
            <h1 className={'favMainTitle'}>{favorite.mainTitle}</h1>
            <img alt={'Background'} src={"photos/city.jpg"}
                 className={'backImage favImage'}/>
            <div className={'favItemContainer'}>
                {
                    //Check for favorite selection
                    favourite && favourite.length > 0 ?
                        favourite.map((item, key) => <Fav key={key} data={item}
                                                          darkMode={darkMode}/>) :
                        <div className={'noDataContainer'}>
                            <span className={'favouriteTitle'}>{favorite.noFav}</span>
                        </div>}
            </div>
            <button className={'backToHome ' + (darkMode ? "unit-dark-mode" : "unit-light-mode")}
                    onClick={_ => props.history.push('/')
                    }>{favorite.backHome}
            </button>
        </div>
    );
};

export default Favourite;