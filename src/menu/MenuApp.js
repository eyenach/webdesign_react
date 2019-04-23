import React, {Component} from 'react';
import Header from '../Header';
import MenuContent from './MenuContent';

class MenuApp extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>

                <MenuContent/>

            </div>
        );
    }
}

export default MenuApp;