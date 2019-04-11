import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    render() {
        return (
            <div className="top">
                <header className="white padding shadow">
                    <p className="bar-item">RECIPE</p>
                    <p className="right bar-item">เข้าสู่ระบบ</p>
                    <p className="right bar-item">สมัครสมาชิก</p>
                    <header className="box">
                        <header className="container-1">
                            <span className="icon"><i className="fa fa-search"></i></span>
                            <input type="search" id="search" placeholder="Search..."/>
                        </header>
                    </header>
                </header>
            </div>
        );
    }
}

export default Header;