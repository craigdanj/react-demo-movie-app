import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
        	<span className="title">Movies App</span>

        	<span className="header-menu">
        		<Link to="/">Movies</Link>
        		<Link to="/events">Events</Link>
        	</span>
        	
        </div>
    );
}

export default Header;
