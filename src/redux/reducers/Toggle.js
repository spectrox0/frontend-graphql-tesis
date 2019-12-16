import { TOGGLE, CLOSE_SIDEBAR } from "../actionTypes";

const initialState = {
  toggle: true
};
export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE: {
      return {
        toggle: !state.toggle
      };
    }
    case CLOSE_SIDEBAR: {
      if (state.toggle) {
        return {
          toggle: false
        };
      } else {
        return { ...state };
      }
    }

    default:
      return state;
  }
}
