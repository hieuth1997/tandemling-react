import React, { Component } from "react";
import Brand from "../Branding";
import "./style.scss";
import { Row, Col } from "antd";

import imgBook from "./../../Static/Img/inverter/book.png";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {


  faAnchor,
  faPencilAlt,
  faDownload,
  faChartLine,
  faQuoteLeft,
  faQuoteRight,

  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import female from "./../../Static/Img/female-profile.jpg";
import male from "./../../Static/Img/male-profile.jpg";
import money from "./icon-3.png";
import book from "./icon-1.png";
import tax from "./icon-2.png";
import total from "./icon-4.png";

class Success extends Component {
  render() {
    return (
      <div className="success-page">
        <Brand title="Success Stories"></Brand>
        <div className="stories">
          <div className="container m-t-60 ">
            <div className="story">
              <Row type="flex">
                <Col xs={24} md={12} xl={12}>
                  <div className="card-story">
                    <img className="d-block" src={book} alt="img"></img>
                    <span className="bg-sea-none color-white d-inline-block">
                      SUCCESS STORY 01
                    </span>
                    <h3>SMSF SUCCESS STORY</h3>
                    <strong className="color-dark">Scenario</strong>
                    <div className="text-icon-left">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-icon"
                      ></FontAwesomeIcon>

                      <div className="text-icon-content">
                        <p>
                          Laura, a 35 year old nurse, has recently started her
                          own practice renting rooms in a medical centre on the
                          grounds of a major hospital..
                        </p>
                      </div>
                    </div>
                    <div className="text-icon-left">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-icon"
                      ></FontAwesomeIcon>

                      <div className="text-icon-content">
                        <p>
                          Her landlord has decided to sell the suite for
                          $350,000. However, she cannot afford to buy her suite.
                        </p>
                      </div>
                    </div>
                    <div className="text-icon-left">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-icon"
                      ></FontAwesomeIcon>

                      <div className="text-icon-content">
                        <p>
                          She has few other assets, although she and her husband
                          both make very good money
                        </p>
                      </div>
                    </div>
                    <div className="text-icon-left">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-icon"
                      ></FontAwesomeIcon>

                      <div className="text-icon-content">
                        <p>
                          They have a $190,000 in a retail master trust super
                          fund and $40,000 in savings.
                        </p>
                      </div>
                    </div>
                    <div className="text-icon-left">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-icon"
                      ></FontAwesomeIcon>

                      <div className="text-icon-content">
                        <p>
                          The couple roll their super into a SMSF and make use
                          of their savings to make deductible super
                          contributions ($18,680 each).
                        </p>
                      </div>
                    </div>
                    <div className="text-icon-left">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-icon"
                      ></FontAwesomeIcon>

                      <div className="text-icon-content">
                        <p>
                          They use the super (now worth $226,000) to invest in
                          the suite using her SMSF.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={12} xl={12}>
                  <div className="story-left">
                    <div
                      style={{
                        minHeight: "300px",
                        backgroundImage:
                          "url(https://tandemuehling.com.au/wp-content/uploads/2017/03/Laura.jpg)",
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center"
                      }}
                      className="panel-widget-style"
                    >
                      {" "}
                    </div>
                    <div className="item-right">
                      <div className="card-story">
                        <strong className="color-dark">Facts</strong>
                        <div className="text-icon-left">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-icon"
                          ></FontAwesomeIcon>

                          <div className="text-icon-content">
                            <p>
                              SMSF lends their super fund $245,000 <br /> (being
                              70% of $350,000).
                            </p>
                          </div>
                        </div>
                        <div className="text-icon-left">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-icon"
                          ></FontAwesomeIcon>

                          <div className="text-icon-content">
                            <p>
                              Their SMSF pays the balance including all the
                              usual transaction costs including stamp duty.
                            </p>
                          </div>
                        </div>
                        <div className="text-icon-left">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-icon"
                          ></FontAwesomeIcon>

                          <div className="text-icon-content">
                            <p>
                              The practice continues to pay the same (market)
                              rent as it did before.
                            </p>
                          </div>
                        </div>
                        <div className="text-icon-left">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-icon"
                          ></FontAwesomeIcon>

                          <div className="text-icon-content">
                            <p>
                              The rent is now helping fund their retirement. All
                              future gains in the value of the property are
                              concessionally taxed.
                            </p>
                          </div>
                        </div>
                        <div className="text-icon-left">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-icon"
                          ></FontAwesomeIcon>

                          <div className="text-icon-content">
                            <p>
                              Laura no longer has to worry about being unable to
                              renew her lease.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="stories">
          <div className="container m-t-60 ">
            <div className="story">
              <Row type="flex">
                <Col xs={24} md={12} xl={12}>
                  <div className="card-story">
                    <img className="d-block" src={book} alt="img"></img>
                    <span className="bg-sea-none color-white d-inline-block">
                      SUCCESS STORY 02
                    </span>
                    <h3>SMSF SUCCESS STORY</h3>
                    <strong className="color-dark">Scenario</strong>
                    <div className="text-icon-left">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-icon"
                      ></FontAwesomeIcon>

                      <div className="text-icon-content">
                        <p>
                          Peter (62 years old) operates a car workshop from a
                          premises acquired in 1991
                        </p>
                      </div>
                    </div>
                    <div className="text-icon-left">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-icon"
                      ></FontAwesomeIcon>

                      <div className="text-icon-content">
                        <p>
                          He wants to retire and allow his son John to take over
                          the business. The property is now worth $1 million and
                          has been fully paid off.
                        </p>
                      </div>
                    </div>
                    <div className="text-icon-left">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-icon"
                      ></FontAwesomeIcon>

                      <div className="text-icon-content">
                        <p>
                          Peter has few assets other than his interest in the
                          business. He and his family have SMSFs with total
                          assets of $500,000.
                        </p>
                      </div>
                    </div>
                    <div className="text-icon-left">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-icon"
                      ></FontAwesomeIcon>

                      <div className="text-icon-content">
                        <p>
                          The SMSF invests in the property using a Tandem
                          Uehling brokered funder in order to provide $700,000
                          of the purchase price
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={12} xl={12}>
                  <div className="story-left">
                    <div
                      style={{
                        minHeight: "300px",
                        backgroundImage:
                          "url(https://tandemuehling.com.au/wp-content/uploads/2017/03/Peter-workshop.jpg)",
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center"
                      }}
                      className="panel-widget-style"
                    >
                      {" "}
                    </div>
                    <div className="item-right">
                      <div className="card-story">
                        <strong className="color-dark">Facts</strong>
                        <div className="text-icon-left">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-icon"
                          ></FontAwesomeIcon>

                          <div className="text-icon-content">
                            <p>
                              Their super fund provides the balance and the
                              usual transaction costs including stamp duty
                            </p>
                          </div>
                        </div>
                        <div className="text-icon-left">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-icon"
                          ></FontAwesomeIcon>

                          <div className="text-icon-content">
                            <p>
                              Peter receives the market value ($1m) which he
                              uses to contribute to super.
                            </p>
                          </div>
                        </div>
                        <div className="text-icon-left">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-icon"
                          ></FontAwesomeIcon>

                          <div className="text-icon-content">
                            <p>
                              No CGT is payable because of the small business
                              retirement provisions
                            </p>
                          </div>
                        </div>
                        <div className="text-icon-left">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-icon"
                          ></FontAwesomeIcon>

                          <div className="text-icon-content">
                            <p>
                              Peter and his wife can each get a tax deduction
                              for up to $105,113 for these contributions – the
                              rest is non-deductible.
                            </p>
                          </div>
                        </div>
                        <div className="text-icon-left">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-icon"
                          ></FontAwesomeIcon>

                          <div className="text-icon-content">
                            <p>
                              Peter and his wife can now receive tax free income
                              of $85,000 pa whilst John pays deductible rent of
                              $73,000 pa.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="container">
            <div className="content text-center">
              <h2 className="text-center color-main">
                Real People, Real Investors
              </h2>
              <h4 className="text-center color-white">
                Listen to what our happy members say about us.
              </h4>
              <div className="message">
                <Row gutter={16}>
                  <Col xs={24} md={12} lg={12}>
                    <blockquote>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="icon-left"
                      ></FontAwesomeIcon>
                      As a native of the USA, I hired the services of Tandem
                      Uehling PropertyUSA when I decided to move to Australia
                      and didn’t want to sell my property but rent it for cash
                      flow instead. Greg has been instrumental in not only
                      placing tenants, but also consistently keeping me up to
                      date with video updates of the property. Greg was also
                      able to refinance the mortgage after the GFC with an
                      interest rate of 2.5%, this has substantially lowered my
                      expense ratio. My trust in Greg has caused me to purchase
                      additional property investments through Tandem Uehling
                      PropertyUSA which is now generating an Internal Rate of
                      Return (IRR) of 16%. Because I am so pleased with these
                      returns, I have decided to purchase units in Greg’s
                      PropertyUSA Fund that will allow me to take advantage of
                      being in a pooled investment fund that will give me access
                      to large scale property developments that I would normally
                      not have access to. Not only will I be invested in high
                      quality projects, but I will also be diversifying my
                      investment across different sectors of the US real estate
                      market which should ultimately lower my risk and lead to
                      greater returns. I’m very excited to continue to see my
                      money grow!
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="icon-right"
                      ></FontAwesomeIcon>
                    </blockquote>
                    <div className="author text-left mt-3">
                      <img
                        className="rounded-circle"
                        alt="img"
                        width="100"
                        height="100"
                        src={female}
                      ></img>
                      <span className="ml-4 city"> Elizabeth U. </span>
                    </div>
                  </Col>
                  <Col xs={24} md={12} lg={12}>
                    <blockquote>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="icon-left"
                      ></FontAwesomeIcon>
                      I became partners with Greg Uehling in 2010, in a company
                      that allowed us to purchase income producing properties in
                      different parts of the USA. Greg’s objective, as he told
                      it to me, was to develop a portfolio of properties that
                      would produce enough cash flow by the time he reached
                      retirement age, so he could retire comfortably knowing
                      that there was some US based income flowing each month.
                      This dovetailed well with my objectives however, I was
                      already 76 years old. I used my retirement account in
                      conjunction with Greg’s free cash for us to develop a
                      50/50 ownership in a company with appropriate capital for
                      use to own a few properties in Cleveland OH and Pittsburgh
                      PA. Over six years on now and I can happily say that we
                      are receiving net cash flow of over 10%. I’m equally
                      excited that we are in a position to begin raising rents
                      as well so this yield will only get better. It’s nice
                      having that monthly cash flow providing me income whilst
                      in retirement.
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="icon-right"
                      ></FontAwesomeIcon>
                    </blockquote>
                    <div className="author text-left mt-3">
                      <img
                        className="rounded-circle"
                        alt="img"
                        width="100"
                        height="100"
                        src={male}
                      ></img>
                      <span className="ml-4 city"> Colette R. . </span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="button-light">
                <FontAwesomeIcon
                  icon={faDownload}
                  className="icon-edge"
                ></FontAwesomeIcon>
                Read more texttimonial
              </div>
            </div>
          </div>
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
            <div className="download">
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
            </div>
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
          <div className="container text-center">
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

export default Success;
