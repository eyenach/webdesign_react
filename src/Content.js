import React, {Component} from 'react';
import './App.css';
import pizza from './pizza.jpg';

class Content extends Component {
    render() {
        return (
            <div>
                <div className="padding">
                    <img src={pizza} className="display center-fit"/>

                    <h3 className="white">Category</h3>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="column">1</div>
                        <div className="column">2</div>
                        <div className="column">3</div>
                        <div className="column">4</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;