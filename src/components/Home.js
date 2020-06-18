import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import "../styles/home.css"
import WeatherContainer from "./WeatherContainer";
import {add, remove} from "../actions";

const Home = _ => {
    const page = useSelector(state => state.page);
    const favor = useSelector(state => state.favourite);
    const [fav, setFav] = useState({
        isFav: favor.indexOf(page.Key) !== -1,
        text: "Add To",
        imgSrc: "unFillFav.svg"
    });
    useEffect(() => {
        const favPage = favor.map(item => item.Key).indexOf(page.Key) !== -1;
        setFav({
            ...fav,
            isFav: favPage,
            text: favPage ? "Remove From" : "Add To",
            imgSrc: favPage ? "fav.svg" : "unFillFav.svg"
        });
// eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [page]);
    const dispatch = useDispatch();

    const clickOnFav = _ => {
        const added = !fav.isFav;
        dispatch(added ? add(page) : remove(page.AdministrativeArea.ID));
        setFav({
            isFav: !fav.isFav,
            text: added ? "Remove From" : "Add To",
            imgSrc: added ? "fav.svg" : "unFillFav.svg"
        });
    };
    return (

        <div className={'homeContainer'}>
            <img alt={'Background'} src={"../../photos/city.jpeg"} className={'backImage'}/>
            <div className={'mainTitle'}>
                {console.log(page)}
                <h1 className={'cityTitle'}>{page.LocalizedName}</h1>
                <div className={'addToFavContainer'}>
                    <span>{fav.text} Favourite</span>
                    <img alt={'AddToFavourite'} src={"../../photos/" + fav.imgSrc}
                         className={'addToFav'}
                         onClick={clickOnFav}/>
                </div>
            </div>
            <WeatherContainer keyValue={page.Key}/>
        </div>
    );
};
export default Home;