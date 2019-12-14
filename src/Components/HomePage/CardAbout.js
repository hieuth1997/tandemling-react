import React, { Component } from 'react';
import img from './../../Static/Img/about/external.svg'


 class CardAbout extends Component {
    render() {
        return (
            <div className="about-component">
                <article className="content">
                    <div className="contain-img">  <img src={this.props.urlImg}  alt="about-img" className="about-img"></img></div>
                     <h4>{this.props.title}</h4>
                      <p>{this.props.content}</p>
                      <div className="button-edge">
                          <img src={img} alt="external-link" className="custom-logo"></img>
                          READ MORE
                        
                          
                      </div>

                </article>
                
            </div>
        );
    }
}

export default CardAbout;
