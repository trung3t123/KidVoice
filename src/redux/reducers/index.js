import {combineReducers} from 'redux';
import userReducer from './User';
import playlistReducers from './Playlist';
import trackReducers from './Track';

const indexReducers = combineReducers({
  user: userReducer,
  playlist: playlistReducers,
  track: trackReducers,
});

export default indexReducers;
