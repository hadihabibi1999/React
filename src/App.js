import React, { Component } from 'react';
import KeyPad from './components/keyPad';
import OutPut from './components/outPut';
import './App.css';

class App extends Component {
state={
  result:""
}
  buttonPressed = buttonName => {
    if (buttonName === "="){
    this.calculate()
    }else if(buttonName === "AC"){
    this.reset();
    }else if(buttonName === "%"){
    this.percent()
    }else if(buttonName === "±"){
      this.negative()
    }else
    this.setState({
      result:this.state.result + buttonName
    });
  };
  negative=()=>{
    this.setState({
      result:this.state.result * -1
    })
  }
  percent=()=>{
    this.setState({
      result:(this.state.result/100)
    })
  }
  reset=()=>{
    this.setState({
      result:""
    })
  }
  calculate=()=>{
    this.setState({
      result: eval(this.state.result)
    });
  };
  render() {
    return (
      <div className="App">
          <OutPut result={this.state.result}/>
          <KeyPad buttonPressed={this.buttonPressed}/>
      </div>
      
    );
  }
}
export default App;
