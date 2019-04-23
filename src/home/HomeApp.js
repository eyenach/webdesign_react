import React, {Component} from 'react';
import Header from '../Header';
import Content from '../Content';

class HomeApp extends Component {
    render() {
        return (
            <div>
                <header className="top">
                    <Header/>
                </header>

                <header>
                    <Content/>
                </header>
            </div>
        );
    }
}

export default HomeApp;