import React, {useEffect, useState} from 'react';
import DayTitle from "./DayTitle";
import {API_KEY, getData} from "./Main";
import InfoUnit from "./InfoUnit";
import {useDispatch} from "react-redux";
import {setPage} from "../actions";
import {withRouter} from "react-router-dom";

const Fav = ({history, data, darkMode}) => {
    const dispatch = useDispatch();
    const [state, setState] = useState();
    useEffect(() => {
        getData("currentconditions/v1/" + data.Key + "?apikey=" + API_KEY).then(data => {
            if (data)
                setState(data[0]);
        })
    }, [data.Key]);
    return (
        <div className={'favUnitContainer ' + (darkMode ? "unit-dark-mode" : "unit-light-mode")}
             onClick={_ => {
                 dispatch(setPage(data));
                 history.push("/")
             }}>
            {state && <div style={{width: '100%'}}><DayTitle title={data.LocalizedName}
                                                             classParent={darkMode ? "dark-mode-title" : "light-mode-title"}
                                                             date={new Date(state.LocalObservationDateTime)}/>
                <InfoUnit data={state}/></div>}
        </div>
    )
};

export default withRouter(Fav);