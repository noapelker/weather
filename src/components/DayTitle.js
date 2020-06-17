import React from 'react';

const DayTitle = ({title,date}) => {
    return (
        <div className={'titleCol'}>
            <span className={"titleTextCol"}>{title}</span>
            <span className={"dateCol"}>{date.getDate()}/{date.getMonth()+1}</span>
        </div>
    );
};

export default DayTitle;