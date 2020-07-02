import React, {Component} from 'react';
import '../Styles/Style.css';

//component for displaying individual zip code
class ZipCard extends Component{

    render(){
        return(
            <div className="zip-card-container">
                    {this.props.zipData}
            </div>
        );
    }
}

export default ZipCard;