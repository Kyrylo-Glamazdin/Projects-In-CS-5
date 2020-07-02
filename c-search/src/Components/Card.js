import React, {Component} from 'react';
// import '../Styles/ZipCard.css';

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