import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import {MovieDetails} from './MovieDetails';

import {MOVIE_1_NO} from '../testData/movies';

configure({adapter: new Adapter});

describe('<MovieDetails/>', () => {

	let wrapper = null;

	beforeEach(() => {
		let moviesActions = {
			triggerLoading: ()=> {},
			fetchMovie: () => {}
		}

		let movie = {
				movie : MOVIE_1_NO
		}

		wrapper = shallow(<MovieDetails 
			moviesActions={moviesActions} 
			movie={movie}
			match={{params: {id: null}}}
			/>);
	});


	it('Renders box office if it exists', () => {

		expect(wrapper.find('p.box-office')).toHaveLength(1);

	});

	it("Doesn't render box office if it equals 'N/A'", () => {

		wrapper.setProps({
			movie: {
				BoxOffice: "N/A"
			}
		})

		expect(wrapper.find('p.box-office')).toHaveLength(0);

	});


});