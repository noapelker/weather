import React from 'react';
import {convertTemperature} from "../Utils";
import {useSelector} from "react-redux";

const DayInfo = ({data, temp}) => {
    const showCelcius = useSelector(state => state.themeMode.showCelcius);
    const unit = showCelcius ? 'ºc' : 'F';

    return (
        <div className={'infoContainer'}>
            <span className={"iconPhrase"}>{data.IconPhrase}</span>
            <div className={'tempContainer'}>
                <span
                    className={'tempText'}>{convertTemperature(temp.Maximum.Value, showCelcius)} {unit}</span>
                <span
                    className={'tempTextSub'}>{convertTemperature(temp.Minimum.Value, showCelcius)} {unit}</span>
            </div>
        </div>
    );
};

export default DayInfo;