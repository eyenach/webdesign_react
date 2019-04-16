import React, {Component} from 'react';
import Header from './Header';
// import Content from './Content';
import MenuContent from './MenuContent';

class menuApp extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>

                {/*<Content/>*/}
                <MenuContent/>

            </div>
        );
    }
}

export default menuApp;