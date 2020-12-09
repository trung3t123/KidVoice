import Axios from "axios"
import Toast from 'react-native-simple-toast';
import URL from "../../Utils/constant/ConstURL";



export const createPlayList = (playlistName, userId) => {
  return function (dispatch) {
    return Axios.post(URL.SERVER + ':5035/tracks/createPlaylist', {
      userId: userId,
      playlistName: playlistName
    }).then(
      response => {
        console.log('response', response);
        dispatch(getAllUserPlaylist(userId));
      }
    )

  }
}

export const getAllUserPlaylist = (userId) => {
  console.log('userId', userId);
  return function (dispatch) {
    return Axios.post(URL.SERVER + ':5035/tracks/getAllUserPlaylist', { userId: userId }).then(
      response => {
        console.log('playlist', response);
        dispatch({ type: 'LOAD_PLAYLIST_SUCCESS', playlist: response.data.playlist })
      }
    ).catch(error => {
      console.log('error', error);
    })
  }
}

export const setModalVisible = (visible) => {
  return function (dispatch) {
    dispatch({ type: 'SET_MODAL_VISIBLE', modalVisible: visible })
  }
}

