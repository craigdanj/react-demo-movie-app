import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../actions/MoviesActionCreator'

class FilterBar extends Component {

	constructor(props) {
		super(props);
        console.log(this);
		this.state = {
			showMovies: this.props.showMovies
		}

        this.selectFilter = this.selectFilter.bind(this);
	}

    selectFilter(value) {
        this.setState({
            showMovies: value
        });

        this.props.moviesActions.setFilter(!value);
    }

    render() {
        return (
            <form className="filters">
                <label>
                    <input type="radio" value="true" checked={this.state.showMovies} onChange={() => this.selectFilter(true)}/>
                    Movies 
                </label>

                &nbsp;

                <label>
            	   <input type="radio" value="false" checked={!this.state.showMovies} onChange={() => this.selectFilter(false)}/> Favourites
                </label>
            </form>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        moviesActions: bindActionCreators(moviesActions, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(FilterBar);