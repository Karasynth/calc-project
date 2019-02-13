import React from "react";

class CalculatorButton extends React.Component {
    constructor( props ){
        super( props );
        this._handleButtonClick = this._handleButtonClick.bind(this);
    }
    _handleButtonClick(){
       this.props.onClick(this.props.operator);
    }
    render(){
        const {style, operator} = this.props;
        return (
            <div 
                className='calculator-button' 
                style={style}
                onClick={this._handleButtonClick}
            >
                {operator}
            </div>
        );
    };
};

CalculatorButton.defaultProps = {
    style: {},
    operator: "+",
    onClick: (operator) => {},
};

export default CalculatorButton;