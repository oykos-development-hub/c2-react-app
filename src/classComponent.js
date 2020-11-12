import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nekiProperty: 'nekaVrijednost'
        };

        //this.clickFunction.bind(this);
    }

    clickFunction(event) {
        this.setState({
            nekiProperty: 12345678,
            nekiDrugiProperty: '987654321'
        });
    }

    render() {
        return (
            <div>
                <h1
                    onClick={
                        (event) => {
                            this.clickFunction(event);
                        }
                    }
                >
                    {this.state.nekiProperty}
                </h1>
                <h2>{this.props.nameAttribute}</h2>
            </div>
        );
    }
}
