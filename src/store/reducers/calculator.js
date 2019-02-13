import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  equation: "",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_EQUATION": {
      const { operator} = action;
      return {
        ...state,
        equation: state.equation + operator,
      };
    }
    case "CLEAR_EQUATION": {
      return {
        ...state,
        equation: initialState.equation,
      };
    }
    default:
      return state;
  }
}
