import { combineReducers } from "redux";
import requirementsReducer from "./requirementsReducer";

const rootReducer = combineReducers({
  formData: requirementsReducer,
});

export default rootReducer;
