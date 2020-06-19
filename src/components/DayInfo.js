import React from 'react';
import {weather} from "../TextBlocks";

const DayInfo = ({data, temp}) => {

    const convertTemperature = val => {
        return Math.round((val - 32) * (5 / 9));
    }
    return (
        <div className={'infoContainer'}>
            <span className={"iconPhrase"}>{data.IconPhrase}</span>
            <div className={'tempContainer'}>
                <span
                    className={'tempText'}>{convertTemperature(temp.Maximum.Value)} {weather.tempUnit}</span>
                <span
                    className={'tempTextSub'}>{convertTemperature(temp.Minimum.Value)} {weather.tempUnit}</span>
            </div>
        </div>
    );
};

export default DayInfo;