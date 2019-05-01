import React, {Component} from 'react';
import './css/home.css';
import './css/menu.css'
import pizza from './pizza.jpg';

class Content extends Component {
    render() {
        return (
            <div className="site-content">
                <div>
                    <img src={pizza} className="display center-fit"/>
                </div>

                <div className="space-line">
                    <h3 className="white padding">Category</h3>
                </div>

                <section className="recipe_4col lists">
                    <div className="wrapper-category">
                        <article>
                            <figure>
                                <a href="" title="">
                                    <img width="294" height="196"
                                         src="https://img.lezizyemeklerim.com/tarif/5578/limonata-tarifi_b1dc05859381615b8854ff374da0fcc9/343x229.jpg"/>
                                </a>
                            </figure>
                            <div className="post_details">
                                <h3><a href="/type/menu" title="">Fried</a></h3>
                            </div>
                        </article>
                        <article>
                            <figure>
                                <a href="" title="">
                                    <img width="294" height="196"
                                         src="https://img.lezizyemeklerim.com/tarif/5578/limonata-tarifi_b1dc05859381615b8854ff374da0fcc9/343x229.jpg"/>
                                </a>
                            </figure>
                            <div className="post_details">
                                <h3><a href="/type/menu" title="">Fried</a></h3>
                            </div>
                        </article>
                        <article>
                            <figure>
                                <a href="" title="">
                                    <img width="294" height="196"
                                         src="https://img.lezizyemeklerim.com/tarif/5578/limonata-tarifi_b1dc05859381615b8854ff374da0fcc9/343x229.jpg"/>
                                </a>
                            </figure>
                            <div className="post_details">
                                <h3><a href="/type/menu" title="">Fried</a></h3>
                            </div>
                        </article>
                        <article>
                            <figure>
                                <a href="" title="">
                                    <img width="294" height="196"
                                         src="https://img.lezizyemeklerim.com/tarif/5578/limonata-tarifi_b1dc05859381615b8854ff374da0fcc9/343x229.jpg"/>
                                </a>
                            </figure>
                            <div className="post_details">
                                <h3><a href="/type/menu" title="">Fried</a></h3>
                            </div>
                        </article>
                        <article>
                            <figure>
                                <a href="" title="">
                                    <img width="294" height="196"
                                         src="https://img.lezizyemeklerim.com/tarif/5578/limonata-tarifi_b1dc05859381615b8854ff374da0fcc9/343x229.jpg"/>
                                </a>
                            </figure>
                            <div className="post_details">
                                <h3><a href="/type/menu" title="">Fried</a></h3>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;