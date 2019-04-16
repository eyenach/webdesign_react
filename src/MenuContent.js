import React, {Component} from 'react';
import './menu.css';

class MenuContent extends Component {
    render() {
        return (
            <div>
                <section className="recipe_4col lists">
                    <div className="wrapper">
                        <article>
                            <figure>
                                <a href="https://www.lezizyemeklerim.com/limonata-tarifi" title="Limonata Tarifi">
                                    <img width="294" height="196"
                                         src="https://img.lezizyemeklerim.com/tarif/5578/limonata-tarifi_b1dc05859381615b8854ff374da0fcc9/343x229.jpg"/>
                                </a>
                            </figure>
                            <div className="post_details">
                                <div className="cat_star">
                                    <a href="https://www.lezizyemeklerim.com/yemek-tarifleri/icecek-tarifleri"
                                       className="cat_name" title="Tatlı Tarifleri">Menu name</a>
                                    <div className="reviews_short">
                                <span title="5.00 Yıldız" className="stars_given">
                                    {/*<span style="width: 100%"></span>*/}
                                </span>
                                    </div>
                                </div>
                                <h3>
                                    <a href="https://www.lezizyemeklerim.com/limonata-tarifi" title="Limonata Tarifi">Menu name</a>
                                </h3>
                                <div className="other_details">
                                    <div className="view">
                                        <i className="fa fa-eye"></i> 13.2B
                                    </div>
                                    <div className="likes">
                                        <i className="fa fa-heart"></i> 120
                                    </div>
                                    <div className="user">
                                        <a href="https://www.lezizyemeklerim.com/mutfak/alev-turken" title="Latife yaşar">
                                            <img alt="Author Name" width="32" height="32"
                                                 src="https://img.lezizyemeklerim.com/mutfak/80d15d19c9fedb019a09753445df5e06/alev-turken/32x32.jpg"/>
                                                 Author Name
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}

export default MenuContent;