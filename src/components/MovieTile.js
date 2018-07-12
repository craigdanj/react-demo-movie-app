import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../actions/MoviesActionCreator';
import star from '../assets/star.svg';
import starOutline from '../assets/star-outline.svg';
import {Link} from 'react-router-dom';

const MovieTile = (props) => {

    const iconSource = props.movie.favourite ? star: starOutline;
            // <img className="poster" src={props.movie.Poster}/>

    return (
        <div className="movie-tile">

            <h4>
                <Link to={`/details/${props.index}`}>
                   {props.movie.Title}
                </Link>
            </h4>

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

}

const mapDispatchToProps = (dispatch) => {
	return {
		moviesActions: bindActionCreators(moviesActions, dispatch)
	}
};


export default connect(null, mapDispatchToProps)(MovieTile);