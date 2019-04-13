import React, {Component} from 'react';
import Header from './Header';
import './login.css';

class loginApp extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>

                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2 className="active"> Sign In </h2>
                        <h2 className="inactive underlineHover">Sign Up </h2>
                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="email"/>
                            <input type="password" id="password" className="fadeIn third" name="login"
                                   placeholder="password"/>
                            <input type="submit" className="fadeIn fourth" value="Log In"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default loginApp;