//The main component that cointains the functions for app functionality

import React, {Component} from 'react';
import axios from 'axios';

import Header from './Components/Header.js';
import Form from './Components/Form.js';
import OutputWrapper from './Components/OutputWrapper.js';

import './Styles/Style.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      enteredCity: "", //city that the user enters
      cityZips: [] //array with the result of the query
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  //changes the value of entered city
  onChangeHandler(event){
    this.setState({
      enteredCity: event.target.value
    })
  }

  //makes an axios request to the api with the city name attached to get the associated zip codes
  onSubmitHandler(event){
    event.preventDefault();
    this.setState({cityZips: []}) //empty the previous zips before getting the new ones

    axios.get('http://ctp-zip-api.herokuapp.com/city/' + this.state.enteredCity.toUpperCase())
    .then(res => {
      this.setState({
        cityZips: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  //renders the main components (header, input form, and aoutput wrapper which displays the zip codes or 'no results' when the entered city name is not found)
  render(){
    return (
      <div>
        <Header/>
        <div className="form-container">
          <Form enteredCity={this.state.enteredCity} handleFormChange={this.onChangeHandler} handleFormSubmit={this.onSubmitHandler}/>
        </div>
        <div className="cards-container">
          <OutputWrapper zipData={this.state.cityZips}/>
        </div>
      </div>
    );
  }
}

export default App;
