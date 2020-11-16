import React from 'react'
import './App.css'
import Button from './Button'
import Input from './Input'
import ClearButton from './ClearButton'
export default class App extends React.Component{
constructor(props){
  super(props); 

  this.state = {
    input: "",
    previousNumber: "", 
    currentNumber: "",
    operator: ""
  };
}
addToInput = val => {
  this.setState({input: this.state.input + val})
}
addOperatorsToInput = () =>{
  this.state.previousNumber = this.state.input;
  this.setState({input:""});
  this.state.operator = "plus";
}
minusOperator = () =>{
this.state.previousNumber = this.state.input;
this.setState({input:""});
this.state.operator = "minus"
}
multiply = () =>{
  this.state.previousNumber = this.state.input;
  this.setState({input:""});
  this.state.operator = "multiply"
}
devide = () =>{
  this.state.previousNumber = this.state.input;
  this.setState({input:""});
  this.state.operator = "devide"
}
evaluate = () =>{
  this.state.currentNumber = this.state.input;
  if (this.state.operator == "plus"){
    this.setState({
      input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
    })
  }else if(this.state.operator == "minus"){
    this.setState({
      input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
    })
  }else if(this.state.operator == "multiply"){
    this.setState({
      input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
    })
  }else if(this.state.operator == "devide"){
    this.setState({
      input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
    })
  }
}

addPointToInput = val => {
  if(this.state.input !== "" && this.state.input.indexOf(".") === -1){
  this.setState({input: this.state.input + val})
  }
}
addZeroToInput = val => {
  if(this.state.input !== ""){
    this.setState({input: this.state.input + val})
  }
}
clearInput = () => {
  if(this.state.input !== ""){
  this.setState({input: ""})
  }
}

  render(){
    return(
      <div className = "App">
        <div className = "calc-wrapper">
          <div className = "row">
            <Input>{this.state.input}</Input>
          </div>
          <div className = "row">
             <Button handleClick = {this.addToInput}>7</Button>
             <Button handleClick = {this.addToInput}>8</Button>
             <Button handleClick = {this.addToInput}>9</Button>
             <Button handleClick = {this.devide}>/</Button>
          </div>
          <div className = "row">
             <Button handleClick = {this.addToInput}>4</Button>
             <Button handleClick = {this.addToInput}>5</Button>
             <Button handleClick = {this.addToInput}>6</Button>
             <Button handleClick = {this.multiply}>*</Button>
          </div>
          <div className = "row">
             <Button handleClick = {this.addToInput}>1</Button>
             <Button handleClick = {this.addToInput}>2</Button>
             <Button handleClick = {this.addToInput}>3</Button>
             <Button handleClick = {this.addOperatorsToInput}>+</Button>
          </div>
          <div className = "row">
             <Button handleClick = {this.addPointToInput}>.</Button>
             <Button handleClick = {this.addZeroToInput}>0</Button>
             <Button handleClick = {this.evaluate}>=</Button>
             <Button handleClick = {this.minusOperator}>-</Button>
          </div>
          <div className = "row">
            <ClearButton handleClear = {this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}