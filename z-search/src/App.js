// The main app component

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
      enteredZip: "", //zip code that the user enters
      zipInfo: []  //result of the axios request
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  //updates the value of the zip code entered by the user
  onChangeHandler(event){
    this.setState({
      enteredZip: event.target.value
    })
  }

  //makes axios api request to get the data for entered zipcode and stores the result in 'zipInfo' array
  onSubmitHandler(event){
    event.preventDefault();
    this.setState({zipInfo: []})

    axios.get('http://ctp-zip-api.herokuapp.com/zip/' + this.state.enteredZip)
    .then(res => {
      this.setState({
        zipInfo: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  //renders the header, the form to enter the zipcode and the wrapper which displays each city's info or 'No results' if zipcode is not fount
  render(){
    return (
      <div>
        <Header/>
        <div className="form-container">
          <Form enteredZip={this.state.enteredZip} handleFormChange={this.onChangeHandler} handleFormSubmit={this.onSubmitHandler}/>
        </div>
        <div className="cards-container">
          <OutputWrapper zipData={this.state.zipInfo}/>
        </div>
      </div>
    );
  }
}

export default App;
