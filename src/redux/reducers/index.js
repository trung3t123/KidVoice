import { combineReducers } from "redux";
import userReducer from "./User";

const indexReducers = combineReducers({
	user : userReducer
});

export default indexReducers;