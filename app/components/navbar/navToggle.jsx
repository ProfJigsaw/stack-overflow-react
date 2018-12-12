import React from 'react';

export default class NavToggle extends React.Component {
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
            <div className="navbar-toggle"
            onClick={this.handleClick} 
            >
                <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
        );
    }    
}