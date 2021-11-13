import fromDropDownReducer from '../reduxStatement/reducers/fromDropdownRed'
import { combineReducers } from "redux";

const rootReducer = (combineReducers as any)({
  fromDropDownReducer
});
export default rootReducer;