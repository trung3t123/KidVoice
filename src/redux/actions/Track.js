import Axios from "axios";

const URL = 'http://192.168.0.117';

export const loadSuggestTracks = () => {
  return function (dispatch) {
    return Axios.get(URL + ':5035/tracks/allTracks').then(
      response => {
        dispatch({ type: 'ADD_SUGGEST_TRACKLIST', suggestedTracks: response.data.tracks })
      }
    ).catch(error => {
      console.log('error', error);
    })
  }
}

export const loadTracklist = (playlistId) => {
  return function (dispatch) {
    return Axios.post(URL + ':5035/tracks/getPlaylist', { playlistId: playlistId }).then(
      response => {
        console.log('response', response);
        dispatch({ type: 'LOAD_TRACKLIST_SUCCESS', trackList: response.data.trackList })
      }
    ).catch((error) => {
      console.log('error', error)
    })
  }
}

export const addTrackToPlaylist = (trackId, playlistId) => {
  return function (dispatch) {
    return Axios.post(URL + ":5035/tracks/addTrackToPlaylist", {
      trackId: trackId,
      playlistId: playlistId
    }).then(response => {
      //add song into  playlist
      console.log('addTracktoPLaylist', response.data.playlist.trackList);
      dispatch({ type: 'LOAD_TRACKLIST_SUCCESS', trackList: response.data.playlist.trackList })
    }).catch(error => {
      console.log('error', error);
    })
  }
}

export const setAddTrackVisible = (isVisible) => {
  console.log('hello', isVisible);
  return function (dispatch) {
    return dispatch({ type: 'SET_ADDTRACK_VISIBLE', addTrackVisible: isVisible })
  }
}
