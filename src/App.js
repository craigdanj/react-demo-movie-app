import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Events from './components/Events';
import FilterBar from './components/FilterBar';
import axios from 'axios';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';

import { bindActionCreators } from 'redux';
import * as moviesActions from './actions/MoviesActionCreator';


class App extends Component {

	constructor(props) {
		super(props);

	}

	componentDidMount() {

		this.props.moviesActions.fetchMovies();
	}

    render() {
        return (
            <BrowserRouter>
            	<div>
	                <Header/>
	                <Route path="/" exact render={() => {
	                	return (
	                			<div>
	                				<FilterBar/>
	                				<Movies showFavourites={this.props.showFavourites} list={this.props.moviesList}/>
	                			</div>
	                		)
	                }}/>
	                <Route path="/details/:id" exact component={MovieDetails}/>
	                <Route path="/events" exact component={Events}/>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		moviesList: state.moviesReducer.moviesList || []
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		moviesActions: bindActionCreators(moviesActions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);