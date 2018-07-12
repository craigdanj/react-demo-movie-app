import MoviesActionConstants from '../constants/MoviesActionConstants';

const initialState = {
	showFavourites: false,
	moviesList: []
};

const movies = (state = initialState, action) => {
	console.log(action);

	switch(action.type) {

		case MoviesActionConstants.MOVIES_FETCH_SUCCESS:
			return {...state, moviesList: action.payload}

		case MoviesActionConstants.ADD_FAVOURITE:

			const newList = [...state.moviesList];
			// const newList = JSON.parse(JSON.stringify(state.moviesList));

			const targetMovie = {...newList[action.payload]}
			if(targetMovie.hasOwnProperty('favourite')) {
				targetMovie.favourite = !targetMovie.favourite;
			} else {
				targetMovie['favourite'] = true;
			}

			newList[action.payload] = targetMovie;
			let returnedState = {...state, moviesList: newList};

			return returnedState;

		case MoviesActionConstants.SET_FILTER:
			const newState = {...state};
			newState.showFavourites = action.payload;
			return newState;

		case MoviesActionConstants.MOVIE_FETCHED:
			const copiedState = {...state};
			copiedState.movieDetails = {...action.payload.data[action.payload.id]};

			return copiedState;

		default:
			return state; 
	}
};


export default movies;