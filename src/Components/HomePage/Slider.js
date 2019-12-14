import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './swiper.css';
import './style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { log } from 'util';

class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animate : false,

        }
    }
    
     componentDidMount()
     {
        AOS.init({
          })
     }
      componentDidUpdate (){ 
        AOS.refresh(); 
      }
      updateAos = () => {
        this.setState({
            animate : true,
        })
       
        


      } 
    render() {
        const params = {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            speed : 1000,
            autoplay: {
                delay: 10000,
              },
             
              on : {
                slideChange: () => this.updateAos(),
              }
            
        }
        return (
            <section id="slider">
                <Swiper {...params}>
                    <div className="article-1">
                       <div className="caption-item">
                           <div className="container">
                           <div className="caption-box">
                            <div className="caption-header"   >
                            
                                BUILD YOUR PROPERTY PORTFOLIO
                             
                            </div>
                            <div className="caption-title">
                                <h2>
                                Invest Alongside U.S. <br/> Real Estate Experts
                                </h2>
                            </div>
                            <div className="caption-content">
                                <span>
                                Property investment options that only multimillionaires had access to is now affordable for all.
                                </span>
                            </div>
                            <div className="caption-btn" >
                                <a className="button-big ">
                                Get Started							

                                </a>
                            </div>
                            

                        </div>
                           </div>
                      

                       </div>

                    </div>
                    <div className="article-2">
                    <div className="caption-item">
                       <div className="item">
                       <div className="caption-box caption-box-2">
                            <div className="caption-header">
                            
                            INVEST IN LUCRATIVE PROPERTIES
                             
                            </div>
                            <div className="caption-title">
                                <h2 className="middle">
                                Return on Property Investment the Effective Way
                                </h2>
                            </div>
                            <div className="caption-content">
                                <span className="middle">
                        Do you want more cashflow, higher leverage and build your property portfolio in the most efficient way? Let us help you!
                                </span>
                            </div>
                            <div className="caption-btn">
                                <a className="button-big ">
                                Get Started							

                                </a>
                            </div>
                            
                        </div>
                      

                       </div>

                       </div>
                    
                        
                        


                    </div>
                    <div className="article-3">
                    <div className="caption-item">
                           <div className="container">
                           <div className="caption-box">
                            <div className="caption-header">
                            
                            PROPERTY INVESTMENT FOR EVERYONE
                             
                            </div>
                            <div className="caption-title">
                                <h2>
                                We Help you Build Wealth <br/>Safely and Reliably
                                </h2>
                            </div>
                            <div className="caption-content">
                                <span>
                                Historical data shows that property has doubled in value every 7-10 years in our major capital cities. Begin your journey to wealth and financial freedom today..
                                </span>
                            </div>
                            <div className="caption-btn">
                                <a className="button-big ">
                                Get Started							

                                </a>
                            </div>
                            

                        </div>
                           </div>
                      

                       </div>

                    </div>
                    
                
                </Swiper>

            </section>

        );
    }
}

export default Slider;
