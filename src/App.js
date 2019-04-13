import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';

class App extends Component {
    render() {
        return (
            <div>
                /* Header */
                <header className="top">
                    <Header/>
                </header>

                <header>
                    <Content/>
                </header>

                <header>
                    <Content/>
                </header>
            </div>
        );
    }
}

export default App;
