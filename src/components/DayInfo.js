import React from 'react';
import {weather} from "../TextBlocks";
import {convertTemperature} from "../Utils";

const DayInfo = ({data, temp}) => {
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