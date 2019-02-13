
const isOperator = function(operator){
    return operator == "+" || operator == "-" || operator == "*" || operator == "/"; 
};


const isEquationUnfinished = function(equation){
    let lastOperator = equation[equation.length - 1];
    let isUnfinished = isOperator(lastOperator);
    return isUnfinished;
};

const trimLastOperator = function(equation){
    return equation.slice(0, -1);
};

export default {
    isEquationUnfinished,
    trimLastOperator,
    isOperator
};