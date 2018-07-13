import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import {Movies} from './Movies';
import MovieTile from './MovieTile';

import {MOVIE_2_NOS} from '../testData/movies';

configure({adapter: new Adapter});

describe('<Movies/>', () => {
	let wrapper = null;

	beforeEach(() => {
		wrapper = shallow(<Movies/>);
	});

	it('Renders "no items in your list" if movie list length is 0', () => {
		
		wrapper.setProps({
			showFavourites : false,
			list : []
		})

		expect(wrapper.contains(<p>No items in your list</p>)).toEqual(true);

	});


	it('Renders a movie list if movie list length > 0', () => {

		wrapper.setProps({
			list: MOVIE_2_NOS
		})

		expect(wrapper.find(MovieTile)).toHaveLength(2);

	});

});