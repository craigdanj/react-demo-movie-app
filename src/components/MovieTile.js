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
            	<img src=""/>	
            	<h4>{this.props.movie.Title}</h4>
            	<button onClick={()=>this.props.addFavourite(this.props.index)}> {this.props.movie.favourite ? "Added": "Add"} to favourite</button>
            </div>
        );
    }
}

export default MovieTile;