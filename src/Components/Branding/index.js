import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export class Brand extends Component {
  render() {
    return (
      <div className="branding">
        <div className="title text-center">
          <h2>{this.props.title}</h2>
          <div>
            <Link to="/">
              <span className="custom-menu">Home</span>
            </Link>
            <span>|</span>
            <span className="sub-title">{this.props.title}</span>
            {this.props.subTitle && (
              <Fragment>
                <span>|</span>
                <span className="sub-2-title">{this.props.subTitle}</span>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
