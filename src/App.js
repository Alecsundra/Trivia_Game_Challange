import React , { Component } from 'react';
import axios from "axios"
import './App.css';

class App extends Component {
  state={
    data:[]
  }
  // api call to get the object with the questions
  async componentDidMount(){
    const data = await axios(`https://opentdb.com/api.php?amount=10&category=29&type=multiple`)
    
        this.setState({
          data:data
          
         })
console.log(data)
  }
render (){
  return (
    <div className="App">
     
      
        <p>
         Home
        </p>
      
    </div>
  );
}
}

export default App;
