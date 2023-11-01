import { combineReducers } from "redux";
import themeReducer from "./theme/theme-reducer";
import countriesReducer from "./countries/countries-reducer";
import controlReducer from "./controls/control-reducer";
import detailsReducer from "./details/details-reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlReducer,
  details: detailsReducer,
});

export default rootReducer;
