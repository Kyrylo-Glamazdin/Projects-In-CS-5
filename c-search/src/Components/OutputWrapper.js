import React from 'react';
import Card from './Card.js';

function OutputWrapper(props) {
    if (props.zipData.length > 0){
        return (
            <div>
                {props.zipData.map(zipInfoCard => (
                    <Card key={zipInfoCard.RecordNumber} zipData={zipInfoCard}/>
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
