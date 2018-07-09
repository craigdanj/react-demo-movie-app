import React from 'react';
import MovieTile from './MovieTile'

const Movies = (props) => {
    let movieTileList = props.list.map((val, index) => <MovieTile movie={val}/>); 

    return (
        <div className="movies content">
        	<h2>Movies List</h2>
            {movieTileList}
        </div>
    );
}

export default Movies;
