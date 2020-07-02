import React from 'react';
import ZipCard from './ZipCard.js';

//wrapper that displays each city name if the length of the array passed as props is greater than 0
//otherwise, displays 'No results', signifying that zipcode wasn't found
function OutputWrapper(props) {
    if (props.zipData.length > 0){
        return (
            <div>
                {props.zipData.map(zipInfoCard => (
                    <ZipCard key={zipInfoCard.RecordNumber} zipData={zipInfoCard}/>
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
