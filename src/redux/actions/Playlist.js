import Axios from "axios"
const URL = 'http://192.168.0.122'


export const createPlayList = (playlistName, userId) => {
	return function (dispatch) {
		return Axios.post(URL + ':5035/tracks/createPlaylist', {
			userId: userId,
			playlistName: playlistName
		}).then(
			response => {
				console.log('response', response);
				dispatch({ type: 'CREATE_PLAYLIST', playlistName: playlistName })
			}
		)

	}
}

export const getAllUserPlaylist = (userId) => {
	return function (dispatch) {
		return Axios.get(URL + ':5035/tracks/getAllUserPlaylist').then(
			response => {
				console.log('playlist', response);
				//checkout response samples
			}
		)
	}
}

export const setModalVisible = (visible) => {
	return function (dispatch) {
		dispatch({ type: 'SET_MODAL_VISIBLE', modalVisible: visible })
	}
}

