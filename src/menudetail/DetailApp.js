import React, {Component} from 'react';
import Header from '../Header';
import DetailContent from './DetailContent';

class DetailApp extends Component {
    render() {
        return (
            <div>
                <Header/>

                <DetailContent/>

            </div>
        );
    }
}

export default DetailApp;