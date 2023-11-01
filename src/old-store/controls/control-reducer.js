import { SET_SEARCH, SET_REGION, CLEAR_UP } from "./control-actions";

const initialState = {
  search: "",
  region: "",
};

const controlReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH: {
      return { ...state, search: payload };
    }
    case SET_REGION: {
      return { ...state, region: payload };
    }
    case CLEAR_UP: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default controlReducer;
