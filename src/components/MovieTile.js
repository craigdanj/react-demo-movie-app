import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../actions/MoviesActionCreator';

const MovieTile = (props) => {
	console.log(props.movie.favourite)
        return (
            <div className="movie-tile">
                <h4>{props.movie.Title}</h4>

            	<button onClick={()=>props.moviesActions.addFavourite(props.index)}> {props.movie.favourite ? "Remove from ": "Add to "}favourite</button>
            </div>
        );
            	// <img src={props.movie.Poster}/>
}

const mapDispatchToProps = (dispatch) => {
	return {
		moviesActions: bindActionCreators(moviesActions, dispatch)
	}
};


export default connect(null, mapDispatchToProps)(MovieTile);