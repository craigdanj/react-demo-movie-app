import React, { Component } from 'react';

class FilterBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

    render() {
        return (
            <div className="filters">
                <label>
                    <input type="radio" name="filter" value="true" checked="true"/>
                    Movies 
                </label>

                &nbsp;

                <label>
            	   <input type="radio" name="filter" value="false"/> Favourites
                </label>
            </div>
        );
    }
}

export default FilterBar;