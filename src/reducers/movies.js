//@flow

import MoviesActionConstants from '../constants/MoviesActionConstants';
import { fromJS } from 'immutable';

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

	let tempState = fromJS(state)

	console.log(tempState.toJS());
	console.log(tempState.get('moviesList'));

	switch(action.type) {

		case MoviesActionConstants.MOVIES_FETCH_SUCCESS:
			// return {...state, moviesList: action.payload}
			return {...state, moviesList: action.payload.slice(11,action.payload.length)}

		case MoviesActionConstants.ADD_FAVOURITE:

			var movieList = tempState.get('moviesList');
			var targetMovie = movieList.get(action.payload)

			if(targetMovie.has('favourite')) {
				targetMovie = targetMovie.set('favourite', !targetMovie.get('favourite'));
			} else {
				targetMovie = targetMovie.set('favourite', true);
			}

			movieList = movieList.set(action.payload, targetMovie);
			tempState = tempState.set('moviesList', movieList);

			return tempState.toJS();

		case MoviesActionConstants.SET_FILTER:
			tempState = tempState.set('showFavourites', action.payload)
			return tempState.toJS();

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