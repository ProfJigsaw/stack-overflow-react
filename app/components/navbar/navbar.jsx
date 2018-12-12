import React from 'react';
import UserNavBar from './userNavItems.jsx';
import GuestNavBar from './guestNavItems.jsx';

export default class NavItems extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: null,
            userid: null,
            isLoggedIn: false
        }
        this.logOut = this.logOut.bind(this);
    }
    componentWillMount () {
        if (localStorage.getItem('stack-username') && localStorage.getItem('stack-userid')) {
            this.setState({
                username: localStorage.getItem('stack-username'),
                userid: localStorage.getItem('stack-userid'),
                isLoggedIn: true
            })
        }
    }
    logOut () {
        localStorage.removeItem('stack-username'),
        localStorage.removeItem('stack-userid'),
        this.setState({
            username: null,
            userid: null,
            isLoggedIn: false
        })
    }
    render () {
        const { isLoggedIn } = this.state;
        if (isLoggedIn) {
            return <UserNavBar logOut={this.logOut} />
        }
        return <GuestNavBar />
    }    
}
