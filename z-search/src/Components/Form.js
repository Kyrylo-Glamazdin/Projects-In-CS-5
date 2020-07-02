import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleFormSubmit}>
                    <label>Zip Code:
                        <input name="zipCode" type="text" value={this.props.enteredZip} onChange={this.props.handleFormChange}/>
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default Form;