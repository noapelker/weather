import React, {useEffect, useState} from 'react';
import DayTitle from "./DayTitle";
import {getData} from "./Main";
import InfoUnit from "./InfoUnit";

const Fav = ({data}) => {
    const [state, setState] = useState();
    useEffect(() => {
        getData("currentconditions/v1/" + data.Key + "?apikey=GK8E2uOE0UfajX6bbLIfGIPjOTeucaC6").then(data => {
            setState(data[0]);

        })
    }, [data.Key]);
    return (
        <div className={'favUnitContainer'}>
            {state && <div style={{width:'100%'}}><DayTitle title={data.LocalizedName}
                                     date={new Date(state.LocalObservationDateTime)}/>
                <InfoUnit data={state}/></div>}
        </div>
    )
};

export default Fav;