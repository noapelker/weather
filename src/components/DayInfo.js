import React from 'react';

const DayInfo = ({data, temp}) => {
    return (
        <div className={'infoContainer'}>
            <span className={"iconPhrase"}>{data.IconPhrase}</span>
            <div className={'tempContainer'}>
                <span className={'tempText'}>{temp.Maximum.Value} {temp.Maximum.Unit}</span>
                <span className={'tempTextSub'}>{temp.Minimum.Value} {temp.Minimum.Unit}</span>
            </div>
        </div>
    );
};

export default DayInfo;