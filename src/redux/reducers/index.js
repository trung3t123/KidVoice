import { combineReducers } from "redux";
import userReducer from "./User";
import playlistReducers from "./Playlist";

const indexReducers = combineReducers({
	user : userReducer,
	playlist : playlistReducers
});

export default indexReducers;