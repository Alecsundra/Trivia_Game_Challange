import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    data:[],
    arrEasyQuestions:[],
    arrMediumQuestions:[],
    arrHardQuestions:[]
  }
  render() {
    console.log(this.props)
    return (
      <MyContext.Provider value={{
        state: this.state,
        fillEasy: (arrEasyQuestions) => this.setState({
            arrEasyQuestions: arrEasyQuestions
        }),
        fillData: (data)=> this.setState({
            data:data
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default MyProvider;