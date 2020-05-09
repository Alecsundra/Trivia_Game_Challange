import React , { Component } from 'react';
import axios from "axios"
import Home from './components/Home/Home';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import EasyGame from './components/EasyGame/EasyGame';
import MediumGame from './components/MediumGame/MediumGame';
import HardGame from './components/HardGame/HardGame'
// import { MyContext } from "./context/MyProvider"

class App extends Component {
  // const { data } = React.useContext(MyContext);
  state={
    data:[],
    arrEasyQuestions:[],
    arrMediumQuestions:[],
    arrHardQuestions:[]

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
          // saving to state the arrays
           this.setState({
            arrEasyQuestions:arrEasyQuestions,
            arrMediumQuestions:arrMediumQuestions,
            arrHardQuestions:arrHardQuestions
           })
//          console.log(arrEasyQuestions)
//          console.log(arrMediumQuestions) 
//          console.log(arrHardQuestions) 
// console.log(data)
// console.log(data.results[0].difficulty)
  }
render (){
  return (
    <div className="App">
{/* //     <div className='home'>
//     <Link to='/easy'>Take it easy!</Link>
//     <Link to='/medium'>Take it to medium!</Link>
//     <Link to='/hard'>Take it hard!</Link>
//     <Link to ='/'>Reset</Link>
// </div> */}
    <Switch>
       <Route exact path='/' 
        component={Home}  
         />
        <Route exact path='/easy' 
        component={(props) => (
       <EasyGame easyQ={this.state.arrEasyQuestions} {... props} />)} 
       />
       <Route exact path='/medium' 
       component={(props) => (
       <MediumGame mediumQ={this.state.arrMediumQuestions} {... props} />
       )} 
       />
       <Route exact path='/hard' 
       component={(props) => (
       <HardGame hardQ={this.state.arrHardQuestions} {... props} />
       )} 
       />
       </Switch>
    </div>
  );
}
}

export default App;
