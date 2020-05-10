import React , { Component } from 'react';
import axios from "axios"
import Home from './components/Home/Home';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import EasyGame from './components/EasyGame/EasyGame';
import MediumGame from './components/MediumGame/MediumGame';
import HardGame from './components/HardGame/HardGame'
// import { MyContext } from "./context/MyProvider"

class App extends Component {
  // const { data } = React.useContext(MyContext);
  state={
    score:0,
    data:[],
    arrEasyQuestions:[],
    arrMediumQuestions:[],
    arrHardQuestions:[],
    index:0,//used for identify the questions in array
    question:''

  }
  // api call to get the object with the questions
  async componentDidMount(){
    const { data }= await axios(`https://opentdb.com/api.php?amount=10&category=11&type=multiple`)
        this.setState({
          data:data.results,
           question:data.results[this.state.index].question,

         })
// mapping the data and getting the questions arrays filtered per difficulty
         const arrEasyQuestions=[];
         const arrMediumQuestions=[];
         const arrHardQuestions=[]
         data.results.map((item)=>{
//if statements, devide the data by diffilculty and store it in different arrays
              if(item.difficulty === 'easy' ){
                  arrEasyQuestions.push(item)
                     return arrEasyQuestions 
           }else if(item.difficulty === 'medium' ){
                arrMediumQuestions.push(item)
                     return arrMediumQuestions
          }else{
                arrHardQuestions.push(item)
                     return arrHardQuestions
              }
           })
          // saving to state the arrays
           this.setState({
            arrEasyQuestions:arrEasyQuestions,
            arrMediumQuestions:arrMediumQuestions,
            arrHardQuestions:arrHardQuestions,
           })
// console.log(this.state.data)
  }
  //increase the index function
checkTheAnswerM =(e)=>{
  if (this.state.arrMediumQuestions[this.state.index].correct_answer === e.target.value){
this.setState({
  index:this.state.index + 1,
  score:this.state.score+50
})
      }
    }
checkTheAnswerH =(e)=>{
      if (this.state.arrHardQuestions[this.state.index].correct_answer === e.target.value){
    this.setState({
      index:this.state.index + 1,
      score:this.state.score+100
    })
          }
        }
checkTheAnswerE =(e)=>{
          if (this.state.arrEasyQuestions[this.state.index].correct_answer === e.target.value){
        this.setState({
          index:this.state.index + 1,
          score:this.state.score+30
        })
              }
            }
// }
// }  
// the function that will check if the answer it's true

render (){
  return (
    <div className="App">
    <p className='instruct'>{this.state.score}</p>
    <Switch>
       <Route exact path='/' 
        component={(props) => (
       <Home data={this.state.data} 
       {... props} />)}  
         />
        <Route exact path='/easy' 
        component={(props) => (
       <EasyGame 
       easyQ={this.state.arrEasyQuestions} 
       index={this.state.index}
       checkTheAnswer={this.checkTheAnswerE}
       {... props} />)} 
       />
       <Route exact path='/medium' 
       component={(props) => (
       <MediumGame 
       arrMediumQuestions={this.state.arrMediumQuestions}
       checkTheAnswer={this.checkTheAnswerM}
       index={this.state.index}
        {... props}
         />)} 
       />
       <Route exact path='/hard' 
       component={(props) => (
       <HardGame 
       arrHardQuestions={this.state.arrHardQuestions}
       index={this.state.index}
       checkTheAnswer={this.checkTheAnswerH}
        {... props} />
       )} 
       />
       </Switch>
    </div>
  );
}
}

export default App;
