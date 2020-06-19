import React, {useEffect} from 'react';
import Home from "./Home";
import Favourite from "./Favourite";
import Menu from "./Menu";
import "../styles/menu.css"
import {setPage} from "../actions"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {home} from "../TextBlocks";

export const API_KEY = "21AG9MDZAv3q5t2PhHeoFWsm5MDaPyMJ"
const dataURL = "https://dataservice.accuweather.com";

export const getData = (endpoint) =>
    fetch(dataURL + '/' + endpoint
        , {
            method: "GET"
        }).then(data => data.json()).then(data => {
        return data
    }).catch(err => console.error(err)
    );

const Main = _ => {
    const dispatch = useDispatch();

    //Geolocation
    useEffect(() => {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(position=> {
                fetch("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + API_KEY + "&q=" + position.coords.latitude + "%2C" + position.coords.longitude, {
                    method: "GET"
                }).then(data => data.json()).then(data => {
                    const url = "locations/v1/cities/autocomplete?apikey=" + API_KEY + "&q=" + encodeURI(data.LocalizedName);
                    getData((url)).then(res => {
                        if (res)
                            dispatch(setPage(res[0]))
                    });
                }).catch(err => console.error(err)
                );
            }, _=> {

                //Set to Tel Aviv by default
                dispatch(setPage(home.defaultCity));
            })
        else console.log("not support")

    }, [])
    return (
        <div className={'main'}>
            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/favourite" component={Favourite}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
};

export default Main;