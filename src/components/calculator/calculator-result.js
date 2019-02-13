import React from "react";
import * as math from 'mathjs'

class CalculatorResults extends React.Component {
    render(){
        const {equation} = this.props;
        let result;
        try {
            result = math.eval(equation);
        }
        catch (err){
            result = 0;
            //console.log(err);
        }
        return (
            <div className="calculator-screen">
                <div>
                    {equation || 0}
                </div>
                <div className="calculator-results">
                    {result || 0}
                </div>
            </div>
        );
    };
};

CalculatorResults.defaultProps = {
    equation: "1+1",
};

export default CalculatorResults;