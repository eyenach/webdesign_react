import React, {Component} from 'react';
import './css/home.css';

class Header extends Component {
    render() {
        return (
            <div className="header padding white">
                <a className="bar-item" href="/home">RECIPE</a>
                <input className="bar-item" type="search" id="search" placeholder="Search..."/>
                <a className="right bar-item" href="/login">Login</a>
                <a className="right bar-item" href="/register">Register</a>
            </div>
        );
    }
}

export default Header;