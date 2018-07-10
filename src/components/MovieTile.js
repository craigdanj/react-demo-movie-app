import React, { Component } from 'react';

class MovieTile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

    render() {
        return (
            <div className="movie-tile">
            	<img src={this.props.movie.Poster}/>	
            	<h4>{this.props.movie.Title}</h4>
            	<button>Add to favourite</button>
            </div>
        );
    }
}

export default MovieTile;