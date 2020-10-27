const initialState = {
  trackList: [],
  suggestedTracks : [],
  addTrackVisible : false,
  playingTrack :[]
}

 const trackReducers = (state = initialState, action) => {
	switch (action.type) {
    case 'LOAD_TRACKLIST_SUCCESS' : {
      return {
        ...state,
        trackList : action.trackList
      }
    }
    case 'ADD_SUGGEST_TRACKLIST' : {
      return {
        ...state,
        suggestedTracks : action.suggestedTracks
      }
    }
    case 'SET_ADDTRACK_VISIBLE' : {
      return {
        ...state,
        addTrackVisible : action.addTrackVisible
      }
    }
		default:
			return state
	}
}

export default trackReducers;