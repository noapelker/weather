import React from 'react';
import DayTitle from "./DayTitle";
import DayInfo from "./DayInfo";
import {useSelector} from "react-redux";
import {days} from "../TextBlocks"

const WeatherContainerCol = ({data, index}) => {
    const date = new Date(data.Date);
    const dayNum = date.getDay();
    const darkMode = useSelector(state => state.themeMode)
    const day = days[dayNum < days.length && dayNum > 0 ? dayNum : 0];
    return (
        <div className={index !== 4 ? 'weatherCol' : "weatherColLast"}>
            {data && <div className={'weatherColSub'}>
                <DayTitle title={day} date={date}
                          classParent={darkMode ? "dark-mode-title" : "light-mode-title"}/>
                <DayInfo data={data.Day} temp={data.Temperature}/>
            </div>}

        </div>
    );
};

export default WeatherContainerCol;