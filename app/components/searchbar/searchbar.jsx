import React from 'react';

export default class SearchBar extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="search">
                <input className="form-control" type="text" placeholder="Search ..." />
            </div>
        );
    }    
}