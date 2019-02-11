import React from "react";
import {connect} from 'react-redux';

class Calculator extends React.Component {
    render(){
        const {result} = this.props;
        return (
            <div className="todo-app">
            <h1>Shayne Thomson's Supreme Calculator</h1>
            <p>{result}</p>
            </div>
        );
    };
};

const select = function(store, props){
    return {
        result: store.calculator.result,
    };
};

export default connect(select)(Calculator);