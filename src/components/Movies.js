import React from 'react';
import MovieTile from './MovieTile'

const Movies = (props) => {
	let movieTileList = [];

	if(props.showFavouriteList) {
		movieTileList = props.list.map((val, index) => {
			if(val.favourite) {
				return <MovieTile key={val.imdbID} index={index} movie={val} addFavourite={props.addFavourite}/>}	
			}
		);

	} else {
		movieTileList = props.list.map((val, index) => <MovieTile key={val.imdbID} index={index} movie={val} addFavourite={props.addFavourite}/>);
	}


	// if(movieTileList.length) {
		return (
	        <div className="movies content">
	            {movieTileList}
	        </div>
	    )
	// } else {
	// 	return (<p>No items in your list</p>);
	// }

}

export default Movies;
