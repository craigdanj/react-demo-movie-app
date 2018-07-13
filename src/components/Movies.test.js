import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import {Movies} from './Movies';
import MovieTile from './MovieTile';

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
			showFavourites : false,
			list : [{
	          "Actors": "Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Griffiths",
	          "Awards": "Nominated for 3 BAFTA Film Awards. Another 11 wins & 42 nominations.",
	          "BoxOffice": "$261,835,892",
	          "Country": "UK, USA, Germany",
	          "DVD": "11 Apr 2003",
	          "Director": "Chris Columbus",
	          "Genre": "Adventure, Family, Fantasy",
	          "Language": "English",
	          "Metascore": "63",
	          "Plot": "Forced to spend his summer holidays with his muggle relations, Harry Potter gets a real shock when he gets a surprise visitor: Dobby the house-elf, who warns Harry Potter against returning to Hogwarts, for terrible things are going to happen. Harry decides to ignore Dobby's warning and continues with his pre-arranged schedule. But at Hogwarts, strange and terrible things are indeed happening: Harry is suddenly hearing mysterious voices from inside the walls, muggle-born students are being attacked, and a message scrawled on the wall in blood puts everyone on his/her guard - \"The Chamber Of Secrets Has Been Opened. Enemies Of The Heir, Beware\" .",
	          "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg",
	          "Production": "Warner Bros. Pictures",
	          "Rated": "PG",
	          "Ratings": [
	            {
	              "Source": "Internet Movie Database",
	              "Value": "7.4/10"
	            },
	            {
	              "Source": "Rotten Tomatoes",
	              "Value": "82%"
	            },
	            {
	              "Source": "Metacritic",
	              "Value": "63/100"
	            }
	          ],
	          "Released": "15 Nov 2002",
	          "Response": "True",
	          "Runtime": "161 min",
	          "Title": "Harry Potter and the Chamber of Secrets",
	          "Type": "movie",
	          "Website": "http://harrypotter.warnerbros.com/",
	          "Writer": "J.K. Rowling (novel), Steve Kloves (screenplay)",
	          "Year": "2002",
	          "imdbID": "tt0295297",
	          "imdbRating": "7.4",
	          "imdbVotes": "444,553"
	        },
	        {
	          "Actors": "Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe",
	          "Awards": "Nominated for 3 Oscars. Another 45 wins & 91 nominations.",
	          "BoxOffice": "$381,000,185",
	          "Country": "USA, UK",
	          "DVD": "11 Nov 2011",
	          "Director": "David Yates",
	          "Genre": "Adventure, Drama, Fantasy",
	          "Language": "English",
	          "Metascore": "87",
	          "Plot": "Harry, Ron, and Hermione continue their quest of finding and destroying the Dark Lord's three remaining Horcruxes, the magical items responsible for his immortality. But as the mystical Deathly Hallows are uncovered, and Voldemort finds out about their mission, the biggest battle begins and life as they know it will never be the same again.",
	          "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
	          "Production": "Warner Bros. Pictures",
	          "Rated": "PG-13",
	          "Ratings": [
	            {
	              "Source": "Internet Movie Database",
	              "Value": "8.1/10"
	            },
	            {
	              "Source": "Rotten Tomatoes",
	              "Value": "96%"
	            },
	            {
	              "Source": "Metacritic",
	              "Value": "87/100"
	            }
	          ],
	          "Released": "15 Jul 2011",
	          "Response": "True",
	          "Runtime": "130 min",
	          "Title": "Harry Potter and the Deathly Hallows: Part 2",
	          "Type": "movie",
	          "Website": "http://www.HarryPotter.com/",
	          "Writer": "Steve Kloves (screenplay), J.K. Rowling (novel)",
	          "Year": "2011",
	          "imdbID": "tt1201607",
	          "imdbRating": "8.1",
	          "imdbVotes": "631,728"
	        }]
		})

		expect(wrapper.find(MovieTile)).toHaveLength(2);

	});

});