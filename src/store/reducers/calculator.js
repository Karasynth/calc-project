import utils from '../../utilities';

const initialState = {
  equation: "4+6*21-9",
};

export default function(state = initialState, action) {
  const {operator} = action;
  switch (action.type) {
    case "ADD_TO_EQUATION": {
      let equation;
      let isUnfinished = utils.isEquationUnfinished(state.equation);
      // If adding a second = - / or *, replace the last one instead
      if (utils.isOperator(operator) && isUnfinished == true) {
        equation = utils.trimLastOperator(state.equation) + operator;
      }
      else {
        equation = state.equation + operator;
      };
      return {
        ...state,
        equation,
      };
    }
    case "CLEAR_EQUATION": {
      return {
        ...state,
        equation: "", //initialState.equation,
      };
    }
    default:
      return state;
  }
}
