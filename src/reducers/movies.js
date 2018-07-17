//@flow

import MoviesActionConstants from '../constants/MoviesActionConstants';
import { fromJS } from 'immutable';

//Flow type for state
type State = {
	+showFavourites: boolean,
	+moviesList: Array<mixed>,
	+loading: boolean,
	+movieDetails: {}
}

//Flow type for action
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
			tempState = tempState.set('moviesList', action.payload)
			return tempState.toJS();

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
			tempState = tempState.set('loading', action.payload)
			return tempState.toJS();

		case MoviesActionConstants.MOVIE_FETCHED:
			tempState = tempState.set('loading', false)
			tempState = tempState.set('movieDetails', action.payload.data[action.payload.id])
			return tempState.toJS();

		default:
			return state;
	}
};


export default movies;