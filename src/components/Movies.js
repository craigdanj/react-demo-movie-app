import React from 'react';
import MovieTile from './MovieTile'
import {connect} from 'react-redux';

const Movies = (props) => {
	let movieTileList = [];
	let movieCount = 0;

	if(props.showFavourites) {

		movieTileList = props.list.map((val, index) => {
			if(val.favourite) {
				movieCount += 1;
				return <MovieTile key={val.imdbID} index={index} movie={val}/>
			}
		});

	} else {
		movieTileList = props.list.map((val, index) => {
			movieCount += 1;
			return <MovieTile key={val.imdbID} index={index} movie={val}/>
		});
	}

	return (
        <div className="movies content">
            {movieCount ? movieTileList: <p>No items in your list</p>
            }
        </div>
    )

}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		showFavourites: state.moviesReducer.showFavourites
	}
}

export default connect(mapStateToProps)(Movies);
