import React from 'react';

export default class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (event) {
        event.preventDefault();
        document.querySelector('.navbar-items').classList.toggle('show');
	    document.querySelector('.hamburger').classList.toggle('open');
    };

    render () {
        return (
            <div className="search">
                <input className="form-control" type="text" placeholder="Search ..." />
            </div>
        );
    }    
}