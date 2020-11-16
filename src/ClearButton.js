import { render } from '@testing-library/react'
import React from 'react'
import './ClearButton.css'
export default class ClearButton extends React.Component{
    render(){
        return(
            <div className ="clear-btn"
            onClick = {() => this.props.handleClear()}
            >
                {this.props.children}
            </div>
        );
    }
}