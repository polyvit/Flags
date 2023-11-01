import { SET_THEME } from "./theme-actions";

const themeReducer = (state = "light", { type, payload: theme }) => {
  switch (type) {
    case SET_THEME: {
      return theme;
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
