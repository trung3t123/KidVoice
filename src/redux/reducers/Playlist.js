import playList from "../../Utils/TempFiles/TempSongs/playList";

const initialState = {
	playlist: [],
	modalVisible : false,
}

const playlistReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_PLAYLIST': {
			let newPlaylist = state.playlist
			newPlaylist.push({
				_id : Math.random(),
				playlistName: action.playlistName
			})
			return {
				...state,
				playlist: newPlaylist,
				modalVisible : false,
			}
		}
		case 'LOAD_PLAYLIST': {
			return state;
		}
		case 'SET_MODAL_VISIBLE' : {
			return {
				...state,
				modalVisible : action.modalVisible
			}
		}
		default:
			return state
	}
}

export default playlistReducers;