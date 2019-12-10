import React, {useEffect, useState} from 'react';
import { getRoadster } from '../utility/space-x-service';

const Roadster = () => {
    const [displayData, setDisplayData] = useState({});

    useEffect(() => {
        getRoadster().then(data => {
            setDisplayData(data);
        })
    },[]);

    return (
        <div>
            <h2 className="launches" >{displayData.name}</h2>
            <h3 className="launches" >{displayData.orbit_type}</h3>
            <p className="launches" >{displayData.details}</p>
        </div>
        
    );
}

export default Roadster;







   

    
   

