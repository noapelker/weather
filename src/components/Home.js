import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import "../styles/home.css"
import WeatherContainer from "./WeatherContainer";
import {add, remove} from "../actions";
import {API_KEY, getData} from "../Utils";
import {errors, weather} from "../TextBlocks";
import {useToasts} from "react-toast-notifications";

const Home = _ => {
    const page = useSelector(state => state.page);
    const darkMode = useSelector(state => state.themeMode);
    const favor = useSelector(state => state.favourite);
    const {addToast} = useToasts()
    const [temp, setTemp] = useState(0);
    const [fav, setFav] = useState({
        isFav: favor.indexOf(page.Key) !== -1,
        text: "Add To",
        imgSrc: "unFillFav.svg"
    });
    useEffect(() => {
        const favPage = favor.map(item => item.Key).indexOf(page.Key) !== -1;
        setFav({
            isFav: favPage,
            text: favPage ? "Remove From" : "Add To",
            imgSrc: favPage ? "fav.svg" : "unFillFav.svg"
        });
    }, [page, favor])
    useEffect(() => {
        if (page && !Array.isArray(page)) {
            //Get current weather
            getData("/currentconditions/v1/" + page.Key + "?apikey=" + API_KEY).then(data => {
                setTemp(data[0].Temperature.Metric.Value)
            }).catch(_ => addToast(errors.failFetch, {appearance: "error"}));
        }
    }, [page,addToast]);
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
            <img alt={'Background'} src={"photos/city.jpg"} className={'backImage'}/>
            <div className={'textsContainer'}>
                <div className={'mainTitle'}>
                    <h1 className={'cityTitle'}>{page.LocalizedName}</h1>
                    <div className={'addToFavContainer'}>
                        <span>{fav.text} Favourite</span>
                        <img alt={'AddToFavourite'} src={"../../photos/" + fav.imgSrc}
                             className={'addToFav ' + (darkMode ? "imgDark" : "imgLight")}
                             onClick={clickOnFav}/>
                    </div>
                </div>
                <h2 className={'tempTitle'}>{temp && temp} {weather.tempUnit}</h2>
            </div>
            <WeatherContainer keyValue={page.Key}/>
        </div>
    );
};
export default Home;