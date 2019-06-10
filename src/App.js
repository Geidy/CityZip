import React from 'react';
import './App.css';
import axios from 'axios';
import Zipcode from './Zipcode';


const BASE_URL = 'http://ctp-zip-api.herokuapp.com/zip/';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      cities: [],
      zipcode: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      zipcode: e.target.value,
    });
  }

  handleSubmit= () => {
    if(this.state.zipcode.length === 5){
    
      let urlCity = BASE_URL + this.state.zipcode;

      try{
        axios.get(urlCity).then(resp => {
        this.setState (
          {
            cities: resp.data,
            zipcode: ''
          }
          )})
    }catch(error){
      console.log(error);
    }
  }
}

render() {
  return (
   
    <div className="App">
      <div className="search-container">
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">TTP-Pipeline Bootcamp</h1>
    <p class="lead"><strong>Practice of Implementing API through React. Cities and zip code API</strong></p>
  </div>
</div>
        
        <h1>ZIP CODE </h1>
        
        <label>Enter Zip Code: 
          <input type="text" onChange={this.handleChange}></input>
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
      
      
      <Zipcode cities={this.state.cities}/>
      </div>
      

    
  );
}  
}
  

export default App;
