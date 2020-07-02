import React, {Component} from 'react';
import '../Styles/ZipCard.css';

//the component for each individual city. displays city's state, locations, population, and total wages
class ZipCard extends Component{

    render(){
        return(
            <div className="zip-card-container">
                <div className="location-text">
                    {this.props.zipData.LocationText}
                </div>
                <ul>
                    <li> 
                        {"State: "}
                        {this.props.zipData.State}
                    </li>
                    <li> 
                        {"Location: "}
                        ({this.props.zipData.Lat}, 
                        {this.props.zipData.Long})
                    </li>
                    <li>
                        {"Population (Estimated): "}
                        {this.props.zipData.EstimatedPopulation}
                    </li>
                    <li> 
                        {"Total Wages: "}
                        {this.props.zipData.TotalWages}
                    </li>
                </ul>
            </div>
        );
    }
}

export default ZipCard;