import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props){
        super (props);

        this.state = {
          nekiProperty: 'nekaVrijednost'
        };

    }

      clickFunction(event){
              console.log(event);
              this.setState({
                nekiProperty: '123123',
                nekiDrugiProperty: '987654321'
              });
            }

    render() {
      return (
        <div>
          <h1
            onClick={(event) => {
              this.clickFunction(event);
            }}
          >
            {this.state.nekiProperty}
          </h1>  
          <h2>{this.props.nameAttribute}</h2>
          {/* this.props.nameAttribute se odnosi na <ClassComponent nameAttribute="neki name atribut"  /> iz app.js */}
        </div>
      );
    }
  }