import * as MoviesApi from '../apis/MoviesApi';
import MoviesActionConstants from '../constants/MoviesActionConstants';

export const fetchMoviesSuccess = (movies) => ({
	type: MoviesActionConstants.MOVIES_FETCH_SUCCESS,
	payload: movies
})

export const fetchMovies = () => {
	return function(dispatch, getState) {
		return (
			MoviesApi.fetchMovies()
			.then( 
				(response) => {
					dispatch(fetchMoviesSuccess(response.data))
				}
			)
		)
	}
}

export const addFavourite = (index) => ({
	type: MoviesActionConstants.ADD_FAVOURITE,
	payload: index
});

export const setFilter = (value) => ({
	type: MoviesActionConstants.SET_FILTER,
	payload: value
});