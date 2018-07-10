import React, { Component } from 'react';

class FilterBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			movies: true
		}

        this.selectFilter = this.selectFilter.bind(this);
	}

    selectFilter(value) {
        this.setState({
            movies: value
        });

        this.props.setFilter(!value);
    }

    render() {
        return (
            <form className="filters">
                <label>
                    <input type="radio" value="true" checked={this.state.movies} onChange={() => this.selectFilter(true)}/>
                    Movies 
                </label>

                &nbsp;

                <label>
            	   <input type="radio" value="false" checked={!this.state.movies} onChange={() => this.selectFilter(false)}/> Favourites
                </label>
            </form>
        );
    }

}

export default FilterBar;