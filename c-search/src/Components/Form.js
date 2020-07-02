import React, {Component} from 'react';
// import '../Styles/Style.css';

class Form extends Component{

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleFormSubmit}>
                    <label className="standard-label">City Name:
                    </label>
                    <input className="standard-input" name="cityName" type="text" value={this.props.enteredCity} onChange={this.props.handleFormChange} placeholder="Try: Springfield"/>
                    <input className="search-button" type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default Form;