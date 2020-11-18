const initialState = {
  playlist: [],
  modalVisible: false,
};

const playlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PLAYLIST': {
      return {
        ...state,
        modalVisible: false,
      };
    }
    case 'LOAD_PLAYLIST_SUCCESS': {
      return {
        ...state,
        playlist: action.playlist,
      };
    }
    case 'SET_MODAL_VISIBLE': {
      return {
        ...state,
        modalVisible: action.modalVisible,
      };
    }
    default:
      return state;
  }
};

export default playlistReducers;
