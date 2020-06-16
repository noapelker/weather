import React from 'react';
import DayTitle from "./DayTitle";
import DayInfo from "./DayInfo";

const WeatherContainerCol = ({data, index}) => {
    const date=new Date(data.Date);
    const dayNum = date.getDay();
    const day = days[dayNum < days.length && dayNum > 0 ? dayNum : 0];
    return (

        <div className={index !== 4 ? 'weatherCol' : "weatherColLast"}>
            {data && <div className={'weatherColSub'}>
                <DayTitle title={day} date={date}/>
                <DayInfo data={data.Day} temp={data.Temperature}/>
            </div>}

        </div>
    );
};
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


export default WeatherContainerCol;