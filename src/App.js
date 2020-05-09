import React , { Component } from 'react';
import axios from "axios"

import './App.css';

class App extends Component {
  state={
    data:[],

  }
  // api call to get the object with the questions
  async componentDidMount(){
    const { data }= await axios(`https://opentdb.com/api.php?amount=10&category=29&type=multiple`)
        this.setState({
          data:data.results
         })
// mapping the data and getting the questions arrays filtered per difficulty
         const arrEasyQuestions=[];
         const arrMediumQuestions=[];
         const arrHardQuestions=[]
         data.results.map((item)=>{
           //if statements, devide the data by diffilculty and store it in different arrays
              if(item.difficulty === 'easy'){
                  arrEasyQuestions.push(item)
                     return arrEasyQuestions
           }else if(item.difficulty === 'medium'){
                arrMediumQuestions.push(item)
                     return arrMediumQuestions
          }else{
                arrHardQuestions.push(item)
                     return arrHardQuestions
              }
           })
         console.log(arrEasyQuestions)
         console.log(arrMediumQuestions) 
         console.log(arrHardQuestions) 
console.log(data)
console.log(data.results[0].difficulty)
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
