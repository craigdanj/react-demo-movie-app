import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../actions/MoviesActionCreator';
import star from '../assets/star.svg';
import starOutline from '../assets/star-outline.svg';

const MovieDetails = (props) => {

    const iconSource = props.movie.favourite ? star: starOutline;

    return (
        <div className="movie-tile">
            
            <h4>{props.movie.Title}</h4>

            <img className="fav-button" onClick={()=>props.moviesActions.addFavourite(props.index)} src={iconSource}/>

            <p className="language">
                {props.movie.Language} 
            </p>
            <p className="meta-info">
                <span>
                    
                    {props.movie.Rated} 

                    &nbsp;&nbsp;|
                    &nbsp;&nbsp;
                </span>
                <span>                    
                    {props.movie.Runtime}
                </span>
            </p>

        </div>
    );
            // <img className="poster" src={props.movie.Poster}/>
    
}

const mapDispatchToProps = (dispatch) => {
	return {
		moviesActions: bindActionCreators(moviesActions, dispatch)
	}
};


export default connect(null, mapDispatchToProps)(MovieDetails);