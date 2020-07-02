import React, {Component} from 'react';
import axios from 'axios';

import Header from './Components/Header.js';
import Form from './Components/Form.js';
import OutputWrapper from './Components/OutputWrapper.js';

// import './Styles/Style.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      enteredCity: "",
      cityZips: []
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event){
    this.setState({
      enteredCity: event.target.value.toUpperCase()
    })
  }

  onSubmitHandler(event){
    event.preventDefault();
    this.setState({cityZips: []})

    axios.get('http://ctp-zip-api.herokuapp.com/city/' + this.state.enteredCity)
    .then(res => {
      this.setState({
        cityZips: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

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
