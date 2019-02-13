import React from "react";
import {connect} from 'react-redux';
import CalculatorResult from "./calculator-result";
import CalculatorRow from "./calculator-row";
import CalculatorButton from "./calculator-button";
import './calculator.css';
import actions from '../../actions/calculatorActions';

class Calculator extends React.Component {
    constructor( props ){
        super( props );
        this._handleCalculatorButtonClick = this._handleCalculatorButtonClick.bind(this);
    }
    _handleCalculatorButtonClick(operator){
        if (operator === "CLEAR") {
            this.props.clearEquation();
        }
        else {
            if (operator === 'x') {
                operator = "*";
            };
            this.props.addToEquation(operator);
        };
    };
    render(){
        const {equation} = this.props;
        return (
            <div className='calculator'>
                <CalculatorResult
                    equation={equation}
                />
                <CalculatorRow>
                    <CalculatorButton
                        operator='CLEAR'
                        onClick={this._handleCalculatorButtonClick}
                        style={{background: 'transparent', color: 'white', border: '1px solid white', width: 130, fontSize:20}}
                    />
                </CalculatorRow>
                <CalculatorRow>
                    <CalculatorButton
                        operator={7}
                        onClick={this._handleCalculatorButtonClick}
                    />
                    <CalculatorButton
                        operator={8}
                        onClick={this._handleCalculatorButtonClick}
                    />
                    <CalculatorButton
                        operator={9}
                        onClick={this._handleCalculatorButtonClick}
                    />
                    <CalculatorButton
                        operator='/'
                        onClick={this._handleCalculatorButtonClick}
                        style={{background: '#50B3E8'}}
                    />
                </CalculatorRow>
                <CalculatorRow>
                    <CalculatorButton
                        operator={4}
                        onClick={this._handleCalculatorButtonClick}
                    />
                    <CalculatorButton
                        operator={5}
                        onClick={this._handleCalculatorButtonClick}
                    />
                    <CalculatorButton
                        operator={6}
                        onClick={this._handleCalculatorButtonClick}
                    />
                    <CalculatorButton
                        operator='x'
                        onClick={this._handleCalculatorButtonClick}
                        style={{background: '#50B3E8'}}
                    />
                </CalculatorRow>
                <CalculatorRow>
                    <CalculatorButton
                        operator={1}
                        onClick={this._handleCalculatorButtonClick}
                    />
                    <CalculatorButton
                        operator={2}
                        onClick={this._handleCalculatorButtonClick}
                    />
                    <CalculatorButton
                        operator={3}
                        onClick={this._handleCalculatorButtonClick}
                    />
                    <CalculatorButton
                        operator='-'
                        onClick={this._handleCalculatorButtonClick}
                        style={{background: '#50B3E8'}}
                    />
                </CalculatorRow>
                <CalculatorRow>
                    <CalculatorButton
                        operator={0}
                        onClick={this._handleCalculatorButtonClick}
                        style={{width: 200}}
                    />
                    <CalculatorButton
                        operator='+'
                        onClick={this._handleCalculatorButtonClick}
                        style={{background: '#50B3E8'}}
                    />
                </CalculatorRow>
            </div>
        );
    };
};

const select = function(store, props){
    return {
        equation: store.calculator.equation,
    };
};

const bindActions = function(dispatch){
    return {
        clearEquation: () => dispatch(actions.clearEquation()),
        addToEquation: (operator) => dispatch(actions.addToEquation(operator)),
    };
};

export default connect(select, bindActions)(Calculator);