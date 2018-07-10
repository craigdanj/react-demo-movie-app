import React, { Component } from 'react';

class MovieTile extends Component {

	constructor(props) {
		super(props);

	}

    render() {
        return (
            <div className="movie-tile">
            	<img src={this.props.movie.Poster}/>

                <h4>{this.props.movie.Title}</h4>

            	<button onClick={()=>this.props.addFavourite(this.props.index)}> {this.props.movie.favourite ? "Remove from ": "Add to "}favourite</button>
            </div>
        );
    }
}

export default MovieTile;