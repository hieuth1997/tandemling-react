import React, { Component } from "react";
import Brand from "../Branding";
import "./style.scss";
import { Row, Col } from "antd";
import imgBook from "./../../Static/Img/inverter/book.png";
import "react-circular-progressbar/dist/styles.css";
import replaceImg from "./../../Static/Img/replace.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faPencilAlt,
  faDownload,
  faChartLine,
  faEnvelope,
  faPhoneAlt,
  faHandshake,
  faCubes,
  faMoneyCheck
} from "@fortawesome/free-solid-svg-icons";

export class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="about-page">
        <Brand title="About Us"></Brand>
        <Row type="flex">
          <Col xs={24} md={12} xl={12}>
            <div
              className="so-panel widget widget_vr_picture aio-widget-text panel-first-child panel-last-child"
              id="panel-7584-1-0-0"
              data-index={2}
              style={{ height: "100%" }}
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://tandemuehling.com.au/wp-content/uploads/2016/09/upper.jpg)",
                  backgroundRepeat: "repeat",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%"
                }}
                className="panel-widget-style"
              >
                {" "}
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} xl={12}>
            <div
              className="bg-dark-blue text-light panel-widget-style"
              style={{ minHeight: "540px" }}
            >
              <article className="text holder clearfix ">
                <article className="text text clearfix  clearfix ">
                  <article className="text text article-simple clearfix  clearfix " />
                  <h3 className="d-inline-block bg-white-none color-dark">
                    About us
                  </h3>
                  <h3>Tandem Uehling PropertyUSA</h3>
                  <p>
                    <strong>
                      Tandem Uehling PropertyUSA was founded in 2009 as an
                      additional service offering to Tandem Uehling’s Financing
                      business, started in 2004.
                    </strong>
                  </p>
                  <p>
                    It is a finely tuned investment vehicle that uses the
                    property investment capital of average Australia investors
                    and allows them to gain access to property investments
                    normally only available to the very wealthy.
                  </p>
                  <p>
                    At Tandem Uehling PropertyUSA, we take positions in free
                    standing residential properties through to equity or
                    mezzanine financing positions in major commercial
                    developments. Each opportunity would normally be difficult
                    for the average investor because of the time, effort and
                    capital requirements along with the years of due diligence
                    needed.
                  </p>
                </article>{" "}
              </article>
            </div>
          </Col>
        </Row>
        <div className="container" style={{ paddingTop: "60px" }}>
          <Row>
            <Col xs={24} md={12} xl={12}>
              <div className="bg-white ll">
                <article className="text clearfix ">
                  <article
                    className="text article-simple clearfix "
                    style={{ textAlign: "left" }}
                  >
                    <span className="d-inline-block bg-dark-none color-white">
                      WHAT WE DO
                    </span>
                    <h2>
                      Property Investment <br />
                      in USA
                    </h2>
                    <strong className="d-inline-block">
                      Gradual growth, substantial income and sustainable ROI are
                      our specialty here at Tandem Uehling Property USA
                    </strong>
                    <p>
                      Our <u>bespoke</u> portfolio clients will be provided
                      their own company structure and bank account in the name
                      of that structure so they could be funded and property
                      purchased for buy &amp; hold cash flow.{" "}
                    </p>
                    <p>
                      Also, we provide a much more lucrative means of accessing
                      the property market by commingling and grouping
                      like-minded investors in a <u>fund</u> to take bigger
                      positions in the best opportunities when on offer. By
                      investing this way, everybody gains in diversity of
                      opportunity types as well as lowering the risk of the
                      overall investment portfolio.{" "}
                    </p>
                    <p>
                      The Tandem Uehling <i>PropertyUSA</i> fund is the first of
                      its kind in Australia allowing for a simple, transparent
                      means of producing double digit returns without having to
                      spend a lot of money, education and time. We strive to
                      give each Australian the ability to add US property income
                      to each of their long-term investment objectives.
                    </p>
                    <div className="button-edge mr-lg-3">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon-edge"
                      ></FontAwesomeIcon>
                      Contact Us
                    </div>
                    <div className="button-edge">
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className="icon-edge"
                      ></FontAwesomeIcon>
                      Call us On 1300 854 431
                    </div>
                  </article>
                </article>
              </div>
            </Col>
            <Col xs={24} md={12} xl={12}>
              <div className="  ll bg-white text-left">
                <span className="d-inline-block bg-dark-none color-white">
                  KNOWING THE BASICS
                </span>
                <h2>
                  Key Tips &amp; Traps
                  <br />
                  in Property Investment
                </h2>
                <div className="text-icon-left">
                  <FontAwesomeIcon
                    icon={faMoneyCheck}
                    className="text-icon"
                  ></FontAwesomeIcon>

                  <div className="text-icon-content">
                    <h3>Buy with cash and leverage only when needed</h3>
                    <p>
                      Because there are substantially better value opportunities
                      in the US property market relative to Australia, we can
                      purchase as many, if not more, investments with cash thus
                      giving us a return on our investment without interest
                      expense. Invest in diverse typ
                    </p>
                  </div>
                </div>
                <div className="text-icon-left">
                  <FontAwesomeIcon
                    icon={faCubes}
                    className="text-icon"
                  ></FontAwesomeIcon>

                  <div className="text-icon-content">
                    <h3>Invest in diverse types of property investments</h3>
                    <p>
                      The more types of investments the more numerous means of
                      income streams. This is not only a way to gain different
                      levels of yield but it allows for the addition of some
                      risk (for an increased yield) without jeopardizing the
                      overall integrity of the portfolio.
                    </p>
                  </div>
                </div>
                <div className="text-icon-left">
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className="text-icon"
                  ></FontAwesomeIcon>

                  <div className="text-icon-content">
                    <h3>Know your developer</h3>
                    <p>
                      Understand the developer’s background and capabilities to
                      be sure that their pedigree offers them the expertise to
                      execute within their means.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row type="flex">
          <Col md={12}>
            <div className="sign-up">
              <article>
                <div className="text-icon">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="icon"
                  ></FontAwesomeIcon>
                  <div className="text-icon-content">
                    <h3>Sign Up Today</h3>
                    <p>
                      If you want to invest in US property, but don’t know where
                      to start then look no further. Our aim is helping our
                      clients secure the best investment properties the US has
                      to offer. Signup today with us for precise and researched
                      property investments.
                    </p>
                  </div>
                </div>
                <div className="button-edge">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="icon-edge"
                  ></FontAwesomeIcon>
                  Invest with Us
                </div>
              </article>
            </div>
          </Col>
          <Col md={12}>
            <div
              style={{
                backgroundImage: "url(" + replaceImg + ")",
                backgroundSize: "cover",
                width: "100%",
                height: "100%"
              }}
            ></div>
            {/* <div className="download">
              <article>
                <Row>
                  <Col md={18} lg={18}>
                    <div className="text-icon">
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="icon"
                      ></FontAwesomeIcon>
                      <div className="text-icon-content">
                        <h3>Download Free eBook</h3>
                        <p>
                          This eBook covers the benefits of investing in the US
                          properties without exhausting all your capital, taking
                          advantage of volume purchasing, investing in diverse
                          types of properties and much more.
                        </p>
                      </div>
                    </div>
                    <div className="button-light">
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="icon-edge"
                      ></FontAwesomeIcon>
                      Download
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="book">
                      <div>
                        <img src={imgBook} className="img-book" alt="book" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </article>
            </div> */}
          </Col>
        </Row>
        <div className="panel-aus">
          <div className="container">
            <div className="content text-center">
              <div className="banner-inner">
                <h2>
                  Tandem Uehling's aim is to help{" "}
                  <strong className="color-main">Australians</strong>
                  <br />
                  achieve financial freedom through well thought out property
                  investing. <br />
                  <p>&nbsp;</p>
                  <i className="icon-font-phone3" />
                  &nbsp;CALL US ON
                  <strong className="color-main">
                    {" "}
                    <a href="tel:1300 854 431" data-wpel-link="internal">
                      1300 854 431
                    </a>
                  </strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="color-dark advertise ">
          <div class="container text-center">
            <h2 className="color-dark">Join Tandem Uehling PropertyUSA</h2>
            <p className="text-center  color-white">
              At Tandem Uehling PropertyUSA, we strive to give each Australian
              the ability to add US property income to each of their long-term
              investment objectives.
            </p>
            <div className="button-medium mt-text mr-md-4">
              <FontAwesomeIcon
                icon={faAnchor}
                className="icon-edge"
              ></FontAwesomeIcon>
              Get Started
            </div>
            <div className="button-medium mt-text   ">
              <FontAwesomeIcon
                icon={faChartLine}
                className="icon-edge"
              ></FontAwesomeIcon>
              Sucess Stories
            </div>
          </div>
          <div className="rounded-circle  icon-absolute ">
            <FontAwesomeIcon icon={faAnchor}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
