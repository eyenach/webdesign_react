import React, {Component} from 'react';
import '../css/detail.css'
import pizza from "../pizza.jpg";

class DetailContent extends Component{
    render() {
        return (
            <div className="site-content">
                <div className="wrapper-detail">
                    <div className="cell-row white">
                        <img src={pizza} className="display center-fit"/>
                        <div className="topic cell">
                            <h3>Hello</h3>
                        </div>
                        <div className="topic cell">
                            <img width="-webkit-fill-available" src={pizza}/>
                        </div>
                    </div>

                    <br></br>

                    <div className="white padding">
                        <div className="detail detail-row">
                            <div className="detail-col detail-info">
                                <h6>time to cook</h6>
                                <h3>15 mins</h3>
                            </div>
                            <div className="detail-col detail-info">
                                <h6>level</h6>
                                <h3>Easy</h3>
                            </div>
                            <div className="detail-col detail-info">
                                <h6>dishes</h6>
                                <h3>for 1-2 people</h3>
                            </div>
                        </div>
                    </div>

                    <br></br>

                    <div className="white padding align-center">
                        <h3>Ingredients</h3>
                    </div>

                    <br></br>

                    <div className="white padding align-center">
                        <h3>Steps</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailContent;