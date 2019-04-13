import React, {Component} from 'react';
import './App.css';

class Header extends Component {
    render() {
        return (
            <div className="header padding white">
                <p className="bar-item">RECIPE</p>
                <div className="bar-item">
                    <input type="search" id="search" placeholder="Search..."/>
                </div>
                <a className="right bar-item" href="/home">Home</a>
                <a className="right bar-item" href="/login">Login</a>
                <a className="right bar-item" href="/register">Register</a>
            </div>
        );
    }
}

export default Header;