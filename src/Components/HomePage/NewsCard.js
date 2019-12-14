import React, { Component } from 'react';
import imgDefault from './../../Static/Img/news-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye, faPaperclip,} from '@fortawesome/free-solid-svg-icons';

class NewsCard extends Component {
    render() {
        return (
            <div className="news-card">
                <div className="infor-card">
                    <div className="show-img">
                        <img src={this.props.newsImg || imgDefault} alt="img-card-news"></img>
                        <div className="overlay">
                            <div className="icon">
                                <FontAwesomeIcon icon={faEye} className="icon-display"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faPaperclip} className="icon-display"></FontAwesomeIcon>

                            </div>
                        </div>
                        <div class="blog-pill">{this.props.subject||"Investment"}</div>
                    </div>
                    <div className="content">
                        <h3><a href="/">{this.props.newsTitle || "Information Package for investors in Tandem PropertyUSA FUND"}</a></h3>
                        <div className="newsAuthor">
                            <span className="vuvo">
                                By
                      <span>{this.props.newsAuthor || "Admin"}</span>
                                , On
                      <span>{this.props.newsDate}</span>
                            </span>

                        </div>
                        <p>{this.props.newContent || "No Content"}</p>

                    </div>
                 

                </div>


            </div>
        );
    }
}

export default NewsCard;
