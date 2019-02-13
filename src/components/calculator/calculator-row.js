import React from "react";

class CalculatorRow extends React.Component {
    render(){
        return (
            <div className='calculator-row'>
                {this.props.children}
            </div>
        );
    };
};

export default CalculatorRow;