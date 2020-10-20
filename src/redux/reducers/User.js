const initialState = {
	user: [],
	loggedInStatus : false,
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCEEDED': {

		}

		case 'LOGIN_FAIL': {

		}

		case 'REGISTER_FAIL': {
			console.log('err', action.payload);
		}

		case 'REGISTER_SUCCEEDED': {
			console.log('user registered', action.user);
			return {
				...state,
				user: action.user
			}
		}

		case 'LOGGED_IN' : {
			return {
				...state ,
				user: action.payload.user,
				loggedInStatus : action.payload.loggedIn
			}
		}

		case 'LOGGED_OUT' : {
			return {
				...state,
				user: [],
				loggedInStatus: action.payload.loggedIn
			}
		}
		default:
			return state;
	}

}

export default userReducer;