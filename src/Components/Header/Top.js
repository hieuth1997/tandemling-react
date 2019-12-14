import React, { Component } from 'react';
import { Icon } from 'antd';
import topLogo from './../../Static/Img/top-logo.png'

 class Top extends Component {
    render() {
        return (
            <div className="top">
                <div className="container">
                    <div className="top-infor">
                        <a className="logo-link pr-4" href="/" target="_blank">
                            <img src={topLogo} alt="top-logo" height="29px" />
                            <p className="pl-2">International Money Tranfer</p>

                        </a>
                        <Icon className="bell-icon pr-2" type="bell" />
                        <p className="infor" >get Advice NOW</p>



                    </div>

                </div>
                
            </div>
        );
    }
}

export default Top;
