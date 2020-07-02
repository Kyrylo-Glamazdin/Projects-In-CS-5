import React, {Component} from 'react';
import '../Styles/Style.css';

//form for getting the user zip code input
class Form extends Component{

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleFormSubmit}>
                    <label className="standard-label">Zip Code:
                    </label>
                    <input className="standard-input" name="zipCode" type="text" value={this.props.enteredZip} onChange={this.props.handleFormChange} placeholder="Try: 10016"/>
                    <input className="search-button" type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default Form;