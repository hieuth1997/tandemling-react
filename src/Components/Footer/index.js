import React, { Component } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHome, faPhoneAlt, faFax, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <section
          id="footer-widget"
          className="widget-area text-light"
          role="complementary"
        >
          <div className="container">
            <div className="row row-equal">
              <aside
                id="vr_text-1"
                className="widget aio-widget-text col-sm-6 column-equal col-md-4"
              >
                <h3 className="widget-title">About Us</h3>
                <article className="text clearfix ">
                  <p>
                    Tandem Uehling <i>PropertyUSA</i> is a finely tuned
                    investment vehicle that uses the property investment capital
                    of average Australia investors and allows them to gain
                    access to property investments normally only available to
                    the very wealthy.
                  </p>
                  <p>
                    {" "}
                    We take positions in free standing residential properties
                    through to equity or mezzanine financing positions in major
                    commercial developments. Each opportunity would normally be
                    difficult for the average investor because of the time,
                    effort and capital requirements along with the years of due
                    diligence needed.
                  </p>{" "}
                </article>
              </aside>
              <aside
                id="text-2"
                className="widget widget_text col-sm-6 column-equal col-md-4"
              >
                <h3 className="widget-title">CONTACT US</h3>{" "}
                <div className="textwidget">
                  <ul className="bottom-address">
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faHome}
                        className="icon-right mr-3"
                      ></FontAwesomeIcon>
                      802/3 Lindsay Street, Neutral Bay, NSW 2089
                    </li>
                    <li>
                    <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className="icon-right mr-3"
                      ></FontAwesomeIcon>
                      <a
                        className="white"
                        href="tel:1300854431"
                        data-wpel-link="internal"
                      >
                        1300 854 431
                      </a>
                    </li>
                    <li>
                    <FontAwesomeIcon
                        icon={faFax}
                        className="icon-right mr-3"
                      ></FontAwesomeIcon>
                      <a
                        className="white"
                        href="tel:1300854431"
                        data-wpel-link="internal"
                      >
                        1300 854 431
                      </a>
                    </li>
                    <li>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon-right mr-3"
                      ></FontAwesomeIcon>
                      <a href="mailto:info@TandemUehling.com.au">
                        info@TandemUehling.com.au
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside
                id="nav_menu-2"
                className="widget widget_nav_menu col-sm-6 column-equal col-md-4"
              >
                <h3 className="widget-title">Navigation</h3>
                <div className="menu-footer-menu-top-container">
                  <ul id="menu-footer-menu-top">
                    <li
                      id="menu-item-8199"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-8199"
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      id="menu-item-8197"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8197"
                    >
                      <Link to="work">How It Works</Link>
                    </li>
                    <li
                      id="menu-item-8198"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8198"
                    >
                      <Link to='work'>Successes</Link>
                    </li>
                    <li
                      id="menu-item-8201"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8201"
                    >
                      <Link to="new">Latest News</Link>
                    </li>
                    <li
                      id="menu-item-8200"
                      className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-72 current_page_item menu-item-8200"
                    >
                      <Link to="about">About Us</Link>
                    </li>
                    <li
                      id="menu-item-8202"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8202"
                    >
                      <Link to="contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </aside>{" "}
            </div>
          </div>
        </section>
        <section className="bottom">
            <div className="container ">
                <div className="content">
                <div className="copy-right">Copyright © 2017 Tandem Uehling. All rights reserved.</div>
                <div className="link-policy">
                    <span className="mr-3">Privacy Policy</span>
                    <span>Real Estate Risk Disclosure </span>
                </div>
                

                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Footer;
