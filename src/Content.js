import React, {Component} from 'react';
import './App.css';
import pizza from './pizza.jpg';

class Content extends Component {
    render() {
        return (
            <div className="padding">
                <img src={pizza} className="display center-fit" />
                <h3 className="white">ประเภทอาหาร</h3>
            </div>
        );
    }
}

export default Content;