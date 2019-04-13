import React, {Component} from 'react';
import './App.css';
import loginApp from './loginApp'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Router>
                <Route path="/login" component={loginApp}/>
                <div className="header padding white">

                    <p className="bar-item">RECIPE</p>

                    <div className="bar-item">
                        <input type="search" id="search" placeholder="Search..."/>
                    </div>

                    <Link to="/login" className="navbar-item">Login</Link>
                    {/*<a className="right bar-item" href="login.html">Login</a>*/}
                    <p className="right bar-item">Register</p>

                </div>
            </Router>
        );
    }
}

export default Header;