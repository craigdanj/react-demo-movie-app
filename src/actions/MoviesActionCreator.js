import * as MoviesApi from '../apis/MoviesApi';
import MoviesActionConstants from '../constants/MoviesActionConstants';

//Fetch All Movies
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


//Add favourite
export const addFavourite = (index) => ({
	type: MoviesActionConstants.ADD_FAVOURITE,
	payload: index
})

//Set filter
export const setFilter = (value) => ({
	type: MoviesActionConstants.SET_FILTER,
	payload: value
})


//Fetch Single Movie
export const fetchMovieSuccess = (data, id) => ({
	type: MoviesActionConstants.MOVIE_FETCHED,
	payload: {data, id}
})

export const fetchMovie = (id) => {
	//return a callback
	return function(dispatch, getState) {
		return (
			MoviesApi.fetchMovies()
			.then( 
				(response) => {
					dispatch(fetchMovieSuccess(response.data, id))
				}
			)
		)
	}
}