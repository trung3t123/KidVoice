import {combineReducers} from 'redux';
import userReducer from './User';
import playlistReducers from './Playlist';
import trackReducers from './Track';
import booksReducers from './Books';

const indexReducers = combineReducers({
  user: userReducer,
  playlist: playlistReducers,
  track: trackReducers,
  books: booksReducers,
});

export default indexReducers;
