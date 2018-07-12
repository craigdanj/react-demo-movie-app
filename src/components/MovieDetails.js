import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../actions/MoviesActionCreator';
import star from '../assets/star.svg';
import starOutline from '../assets/star-outline.svg';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.moviesActions.fetchMovie(this.props.match.params.id)
    }

    render() {

        return (
            <div className="movie-details">
                <h2>{this.props.match.params.id}</h2>

                <img className="poster" src={this.props.movie.Poster}/>
                
                <h1>{this.props.movie.Title}</h1>

                <p className="language">
                    {this.props.movie.Language} 
                </p>

                <p className="meta-info">
                    <span>
                        {this.props.movie.Rated} 
                    </span>

                    &nbsp; - &nbsp;
                    
                    <span>                    
                        {this.props.movie.Runtime}
                    </span>
                </p>
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        movie: state.moviesReducer.movieDetails || {}
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		moviesActions: bindActionCreators(moviesActions, dispatch)
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);