import MoviesActionConstants from '../constants/MoviesActionConstants';

const initialState = {
	showFavourites: false,
	moviesList: []
};

const rootReducer = (state = initialState, action) => {

	switch(action.type) {
		case MoviesActionConstants.MOVIES_FETCH_SUCCESS:
			return {...state, moviesList: action.payload}

		default:
			return state; 
	}
}


export default rootReducer;