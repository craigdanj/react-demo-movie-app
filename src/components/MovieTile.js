import React, { Component } from 'react';

const MovieTile = (props) => {

        return (
            <div className="movie-tile">

                <h4>{props.movie.Title}</h4>

            	<button onClick={()=>props.addFavourite(props.index)}> {props.movie.favourite ? "Remove from ": "Add to "}favourite</button>
            </div>
        );
            	// <img src={props.movie.Poster}/>
        
        
}

export default MovieTile;