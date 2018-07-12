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

export const addFavourite = (movies) => ({
	type: MoviesActionConstants.ADD_FAVOURITE,
	payload: movies
})