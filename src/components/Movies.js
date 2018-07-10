import React from 'react';
import MovieTile from './MovieTile'

const Movies = (props) => {
	let movieTileList = [];
	let movieCount = 0;

	if(props.showFavouriteList) {

		movieTileList = props.list.map((val, index) => {
			if(val.favourite) {
				movieCount += 1;
				return <MovieTile key={val.imdbID} index={index} movie={val} addFavourite={props.addFavourite}/>
			}
		});



	} else {
		movieTileList = props.list.map((val, index) => {
			movieCount += 1;
			return <MovieTile key={val.imdbID} index={index} movie={val} addFavourite={props.addFavourite}/>
		});
	}


	// if(movieTileList.length) {
		return (
	        <div className="movies content">
	            {movieCount ? movieTileList: <p>No items in your list</p>
	            }
	        </div>
	    )
	// } else {
	// 	return (<p>No items in your list</p>);
	// }

}

export default Movies;
