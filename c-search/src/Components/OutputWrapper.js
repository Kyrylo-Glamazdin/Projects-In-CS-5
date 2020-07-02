import React from 'react';
import Card from './Card.js';

//the wrapper for the output. if the length of zip code array passed as props is greater than 0, then it displays each of the zipcodes. 
//otherwise, it displays 'No Results', signifying that the city was not found
function OutputWrapper(props) {
    if (props.zipData.length > 0){
        return (
            <div className="all-zips-container">
                    {props.zipData.map(zipInfoCard => (
                        <Card key={zipInfoCard} zipData={zipInfoCard}/>
                    ))}
            </div>
        );
    }
    else{
        return (
            <div>
                No Results
            </div>
        );
    }
}

export default OutputWrapper;
