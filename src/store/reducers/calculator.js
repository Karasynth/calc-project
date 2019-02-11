import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
    result: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
