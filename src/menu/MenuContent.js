import React, {Component} from 'react';
import '../css/menu.css';

class MenuContent extends Component {
    render() {
        return (
            <div className="site-content">
                <div className="wrapper-menu">
                    <div className="row">
                        <a className="column white" href="/menu/detail">
                            <h2>Tum Yum Kung</h2>
                            <div className="cat_star">
                                <a className="cat_name" title=""><h7>Fried</h7></a>
                                <div className="reviews_short">
                                    <span title="5.00 Yıldız" className="stars_given">
                                        {/*<span style="width: 100%"></span>*/}
                                    </span>
                                </div>
                            </div>
                            <figure className="space-line">
                                <img width="294" height="196"
                                     src="https://img.lezizyemeklerim.com/tarif/5578/limonata-tarifi_b1dc05859381615b8854ff374da0fcc9/343x229.jpg"/>
                            </figure>
                            <div className="other_details space-line">
                                <div className="view">
                                    <i className="fa fa-eye"></i> 13.2B
                                </div>
                                <div className="likes">
                                    <i className="fa fa-heart"></i> 120
                                </div>
                                <div className="user">
                                    <h7>Author name</h7>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuContent;