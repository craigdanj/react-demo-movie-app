import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Movies from './components/Movies';
import Events from './components/Events';
import FilterBar from './components/FilterBar';
import axios from 'axios';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showFavourites: false,
			moviesList: []
		}

		this.addFavourite = this.addFavourite.bind(this);
		this.setFilter = this.setFilter.bind(this);
	}


	componentDidMount() {

		axios.get('http://www.mocky.io/v2/5b44a1b92f00006400583823')
			.then(response => {
				// handle success
				console.log(response);

				this.setMovieList(response.data);
			})
			.catch(error => {
				// handle error
				console.log(error);
			})
			.then(() => {
				// always executed
			});
	}

	setMovieList(value) {

		this.setState({
			moviesList: value
		})
	}

	addFavourite(index) {
		const newList = [...this.state.moviesList];

		newList[index].favourite = !newList[index].favourite;

		this.setState({
			moviesList: newList
		})
	}

	setFilter(value) {
		this.setState({
			showFavourites: value
		})
	}

    render() {
        return (
            <BrowserRouter>
            	<div>
	                <Header/>
	                <Route path="/" exact render={() => {
	                	return (
	                			<div>
	                				<FilterBar setFilter={this.setFilter}/>
	                				<Movies showFavouriteList={this.state.showFavourites} addFavourite={this.addFavourite} showFavourites={this.state.showFavourites} list={this.state.moviesList}/>
	                			</div>
	                		)
	                }}/>
	                <Route path="/events" exact component={Events}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;