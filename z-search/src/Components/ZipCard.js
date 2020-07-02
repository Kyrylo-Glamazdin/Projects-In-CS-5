import React, {Component} from 'react';

class ZipCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.zipData.LocationText}
                {this.props.zipData.State}
                {this.props.zipData.Lat}
                {this.props.zipData.Long}
                {this.props.zipData.EstimantedPopulation}
                {this.props.zipData.TotalWages}
            </div>
        );
    }
}

export default ZipCard;