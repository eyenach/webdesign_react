import React, {Component} from 'react';
import Header from './Header';
import './login.css';

class registerApp extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>

                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2><a className="inactive underlineHover" href="/login"> Login </a></h2>
                        <h2><a className="active" href="/register"> Register </a></h2>
                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="username"/>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="email"/>
                            <input type="password" id="password" className="fadeIn third" name="login"
                                   placeholder="password"/>
                            <input type="submit" className="fadeIn fourth" value="Register"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default registerApp;