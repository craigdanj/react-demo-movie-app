import MoviesActionConstants from '../constants/MoviesActionConstants';

const initialState = {
	showFavourites: false,
	moviesList: []
};

const rootReducer = (state = initialState, action) => {

	switch(action.type) {
		case MoviesActionConstants.MOVIES_FETCH_SUCCESS:
			return {...state, moviesList: action.payload}
		case MoviesActionConstants.ADD_FAVOURITE:

			//Modify without mutating original state. original state getting modified this is causing problems. Bug seems to be from here.

			const newList = [...state.moviesList];
			// const newList = JSON.parse(JSON.stringify(state.moviesList));

			// console.log(newList[action.payload]);
			// console.log(newList[action.payload].hasOwnProperty('favourite'));
			const temp = {...newList[action.payload]}
			if(temp.hasOwnProperty('favourite')) {
				temp.favourite = !temp.favourite;
			} else {
				temp['favourite'] = true;
			}

			newList[action.payload] = temp;

			let returnedState = {...state, moviesList: newList};

			console.log(returnedState);

			return returnedState;

		default:
			return state; 
	}
}


export default rootReducer;