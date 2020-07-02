import React from 'react';
import ZipCard from './ZipCard.js';

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
