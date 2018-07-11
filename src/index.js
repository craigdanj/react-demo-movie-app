import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';


const store = createStore(
		combineReducers({
			moviesReducer: rootReducer
		}),
		applyMiddleware(thunk)
	);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
