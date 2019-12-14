import React, { Component } from "react";
import imgNew from "./../../Static/Img/news-img/news-1.jpg";
class NewsMenu extends Component {
  render() {
    return (
      <div className="news-menu">
        <div className="container">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="new-link">
                <img src={imgNew} alt="img-new" className="img-new-link" />
                <h3 className="title-new-link">
                  <span>
                    Information Package for investors in Tandem PropertyUSA FUND
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="new-link">
                <img src={imgNew} alt="new-menu" className="img-new-link" />
                <h3 className="title-new-link">
                  <span>
                    Information Package for investors in Tandem PropertyUSA FUND
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="new-link">
                <img alt="new-img" src={imgNew} className="img-new-link" />
                <h3 className="title-new-link">
                  <span>
                    Information Package for investors in Tandem PropertyUSA FUND
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsMenu;
