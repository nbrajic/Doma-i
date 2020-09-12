import Launch from './Launch';
import React from 'react';

const LaunchList = ({arr}) => {

    return(
        <div className="launch-list">
        {arr.map(launch => 
            <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    )
};

export default LaunchList;