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

        let ratings = [];

        if(this.props.movie.Ratings) {
            ratings = this.props.movie.Ratings.map((val, key) => {
                return <li>{val.Source}: {val.Value}</li>
            })
        }

        return (
            <div className="movie-details">

                <div>
                    <div className="sidebar">
                        <img className="poster" src={this.props.movie.Poster}/>

                        <div className="rating-container">

                            <h4>Ratings</h4>

                            <ul className="ratings">
                                {ratings}
                            </ul>
                        </div>

                    </div>

                    <div className="info">
                        <h1>{this.props.movie.Title}</h1>
                        
                        <h4>{this.props.movie.Year}</h4>

                        <h5>
                            {this.props.movie.Writer}
                        </h5>

                        <div className="meta">
                            <p>
                                Rating: {this.props.movie.Rated}
                            </p>

                            <p>
                                Duration: {this.props.movie.Runtime}
                            </p>

                            <p>
                                Genre: {this.props.movie.Genre}
                            </p>

                            <p>
                                Languages: {this.props.movie.Language} 
                            </p>

                            <p>
                                Cast: {this.props.movie.Actors} 
                            </p>
                        </div>


                        <p>
                            {this.props.movie.Plot} 
                        </p>

                    </div>
                </div>


                
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