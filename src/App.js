import React, { Component } from "react";
import './App.css';
import KeyPad from "./components/KeyPad";
import Output from './components/Output';

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  buttonPressed = button => {

      if(button === "="){
          this.calculate();
      }

      else if(button === "C"){
          this.reset();
      }
      else if(button === "CE"){
          this.backspace();
      }

      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };


  calculate = () => {
     
      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(this.state.result) || "") + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render() {
      return (
          <div>
              <div className="calculator-body">
                  <h1>Calculator</h1>
                  <Output result={this.state.result}/>
                  <KeyPad buttonPressed={this.buttonPressed}/>
              </div>
          </div>
      );
  }
}


 

export default App;
