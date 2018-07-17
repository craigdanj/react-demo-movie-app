//@flow

import MoviesActionConstants from '../constants/MoviesActionConstants';

type State = {
	+showFavourites: boolean,
	+moviesList: Array<mixed>,
	+loading: boolean,
	+movieDetails: {}
}

type Action = {
	type: string,
	payload: any
}

const initialState: State = {
	showFavourites: false,
	moviesList: [],
	loading: false,
	movieDetails: {}
};

const movies = (state: State = initialState, action: Action) => {
	// console.log(action);

	switch(action.type) {

		case MoviesActionConstants.MOVIES_FETCH_SUCCESS:
			// return {...state, moviesList: action.payload}
			return {...state, moviesList: action.payload.slice(11,action.payload.length)}

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

		case MoviesActionConstants.FETCH_IN_PROGRESS:
			const clonedState = {...state};
			clonedState.loading = true;
			return clonedState;

		case MoviesActionConstants.MOVIE_FETCHED:
			const copiedState = {...state};
			copiedState.loading = false;
			copiedState.movieDetails = {...action.payload.data[action.payload.id]};

			return copiedState;

		default:
			return state; 
	}
};


export default movies;