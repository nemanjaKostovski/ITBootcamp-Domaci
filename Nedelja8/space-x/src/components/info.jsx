import React, { useEffect, useState } from 'react';
import { getInfo } from '../utility/space-x-service';

const Info = () => {
    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        getInfo().then(data => {
            setDisplayData(data);
        })
    },[]);

    return (
        <div className="bg-img">
            <h1 className="launches" >{displayData.name}</h1>
            <h2 className="launches" >{displayData.founder}</h2>
            <h3 className="launches" >{displayData.founded}</h3>
            <p className="launches" >{displayData.summary}</p>
        </div>
    );
}

export { Info };