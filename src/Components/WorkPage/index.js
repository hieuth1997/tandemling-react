import React, { Component } from "react";
import Brand from "../Branding";
import "./style.scss";
import { Row, Col } from "antd";
import money from "./icon-3.png";
import fund from "./icon-1.png";
import tax from "./icon-2.png";
import total from "./icon-4.png";
import imgBook from "./../../Static/Img/inverter/book.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisibilitySensor from "react-visibility-sensor";
import {
  faBriefcase,
  faCog,
  faUmbrella,
  faAnchor,
  faMoneyBillWave,
  faPencilAlt,
  faDownload,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

export class Workpage extends Component {
  render() {
    return (
      <div className="work-page">
        <Brand title="How It works"></Brand>
        <Row type="flex">
          <Col xs={24} md={10} xl={10}>
            <div
              className="left-information so-panel widget widget_vr_text aio-widget-text panel-first-child panel-last-child"
              id="panel-7584-0-0-0"
              data-index={0}
            >
              <div
                className="color-gray-5-background panel-widget-style"
                style={{ padding: "60px 40px 60px 40px", minHeight: "540px" }}
              >
                <article className="text clearfix ">
                  <article className="text clearfix ">
                    <article className="text article-simple clearfix ">
                      <h2 className="text-mega">01.</h2>
                      <h3>
                        Ensuring that you are a Qualified Investor for Our
                        Services
                      </h3>
                      <p>
                        Investors are required to acknowledge that they qualify
                        as an{" "}
                        <i>
                          “
                          <a
                            title="accredited investor australia"
                            href="https://tandemuehling.com.au/"
                            data-wpel-link="internal"
                          >
                            Accredited Investor
                          </a>
                          ”
                        </i>{" "}
                        by the standard definition by the Securities and
                        Exchange Commission (SEC) in the USA.
                      </p>
                      <p>
                        Whether you are investing as part of the fund or seeking
                        for a greater ROI with our bespoke portfolio, you need
                        to make sure that you have the capital required.
                      </p>
                      <p>
                        Our services can be labelled into two distinct
                        categories. Our bespoke portfolio, which clients that
                        have an ample capital are eligible. Second, the fund.
                        After providing these services for the past 7 years,
                        we’ve decided to offer a much more lucrative means of
                        accessing this market by commingling and grouping
                        like-minded investors to take bigger positions in the
                        best opportunities when on offer. Essentially, this
                        means you have access to investment opportunities only
                        the top 1% previously had access to.
                      </p>
                      <p>
                        With a high level of bespoke financial strategies and
                        well timed investments we are the leading property
                        investment company that assists Australian residents.
                      </p>
                      <a
                        className=" mt-2 button-edge button-edge-dark"
                        href="/get-started"
                        data-wpel-link="internal"
                      >
                        <i className="icon-line-briefcase" />
                        Invest with Us
                      </a>
                      {/*- &#091;aio_text_icon icon_color="#4297d8" icon="icon-font-dollar" content="Tandem Uehling will provide you with the ability to invest in our variety of exceptional properties."&#093; &#091;aio_text_icon icon_color="#4297d8" icon="icon-line-user-following" content="Analysis and property value will rise with the constant demand of market."&#093; &#091;aio_text_icon icon_color="#4297d8" icon="icon-font-banknote" content="Our REITs receive income from creditworthy individuals and distribute that wealth to shareholders in the form of monthly dividends."&#093; &#091;aio_button module="edge-dark" size="medium" url="#" title="Join the Fund" icon="icon-lined-anchor"&#093; -*/}{" "}
                    </article>
                  </article>
                </article>
              </div>
            </div>
          </Col>
          <Col xs={24} md={14} xl={14}>
            <article
              className="text text article-simple clearfix  clearfix "
              style={{ padding: "10px", textAlign: "center" }}
            >
              <h3>Our Formula for Building Wealth</h3>
            </article>
            <Row>
              <Col xs={24} md={12} xl={12}>
                <article
                  className="text text article-simple clearfix  clearfix "
                  style={{ padding: "30px", textAlign: "center" }}
                >
                  <img
                    className=" ls-is-cached lazyloaded"
                    src={money}
                    alt="Property Portfolio, buy house in america, buy property in usa, buying property in the usa, property investment in usa, buying property in usa from australia"
                  />
                  <h4>Quarterly Update</h4>
                  Each investor will be updated quarterly as to their percentage
                  ownership and the total Net Asset Value (NAV) of the fund.
                </article>
              </Col>
              <Col xs={24} md={12} xl={12}>
                <article
                  className="text text article-simple clearfix  clearfix "
                  style={{ padding: "30px", textAlign: "center" }}
                >
                  <img
                    className=" ls-is-cached lazyloaded"
                    src={fund}
                    alt="Property Portfolio, buy house in america, buy property in usa, buying property in the usa, property investment in usa, buying property in usa from australia"
                  />
                  <h4>Fund Growth &amp; Property Value Increase</h4>
                  As the Fund grows so will the investing in real property and
                  property derivative investments generating cash flow back to
                  the Fund
                </article>
              </Col>
              <Col xs={24} md={12} xl={12}>
                <article
                  className="text text article-simple clearfix  clearfix "
                  style={{ padding: "30px", textAlign: "center" }}
                >
                  <img
                    className=" ls-is-cached lazyloaded"
                    src={tax}
                    alt="Property Portfolio, buy house in america, buy property in usa, buying property in the usa, property investment in usa, buying property in usa from australia"
                  />
                  <h4>Tax Savings</h4>
                  Tandem Uehling assists and educates all clients in regards to
                  tax and how it might influence income.
                </article>
              </Col>
              <Col xs={24} md={12} xl={12}>
                <article
                  className="text text article-simple clearfix  clearfix "
                  style={{ padding: "30px", textAlign: "center" }}
                >
                  <img
                    className=" ls-is-cached lazyloaded"
                    src={total}
                    alt="Property Portfolio, buy house in america, buy property in usa, buying property in the usa, property investment in usa, buying property in usa from australia"
                  />
                  <h4 style={{ color: "#65c7cf" }}>Your Total Return</h4>
                  Prosperity and financial growth is the only outcome when you
                  liaise with the utmost professional investing company.
                </article>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={16} xl={16}>
            <div
              className="so-panel widget widget_vr_picture aio-widget-text panel-first-child panel-last-child"
              id="panel-7584-1-0-0"
              data-index={2}
              style={{ height: "100%" }}
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://tandemuehling.com.au/wp-content/uploads/2017/03/Step-02.jpg)",
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
          <Col xs={24} md={8} xl={8}>
            <div
              className="bg-dark-blue text-light panel-widget-style"
              style={{ minHeight: "540px" }}
            >
              <article className="text holder clearfix ">
                <article className="text text clearfix  clearfix ">
                  <article className="text text article-simple clearfix  clearfix " />
                  <h2 className="text-mega">02.</h2>
                  <h3>We Collect and Distribute Income to Shareholders</h3>
                  <p>
                    <strong>
                      The rise of property value and demand will skyrocket as
                      all our properties are carefully chosen with a degree of
                      professionalism.
                    </strong>
                  </p>
                  <p>
                    As the Fund accumulates capital from investors and the Fund
                    grows, each investor will be updated quarterly as to their
                    percentage ownership and the total Net Asset Value (NAV) of
                    the fund for which that percentage ownership relates to.
                  </p>
                  <a
                    className="button-light button-edge-light"
                    href="/get-started"
                    data-wpel-link="internal"
                  >
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="icon-edge"
                    ></FontAwesomeIcon>
                    Invest with Us
                  </a>
                </article>{" "}
              </article>
            </div>
          </Col>
          <Col xs={24} md={8} xl={8}>
            <div
              className="bg-sea panel-widget-style"
              style={{ minHeight: "540px" }}
            >
              <article className="text fund clearfix ">
                <article className="text text clearfix  clearfix ">
                  <article className="text text article-simple clearfix  clearfix " />
                  <h2 className="text-mega">03.</h2>
                  <h3>How do I receive my money?</h3>
                  <p>
                    <strong>
                      As the Fund grows so will the investing in real property
                      and property derivative investments generating cash flow
                      back to the Fund..
                    </strong>
                  </p>
                  <p>
                    Annual distributions comprising of 50% of the net cash flow
                    will be offered to each investor. Each investor has the
                    choice of receiving their distribution wired to their
                    Australian bank account in Australian dollars (converted to
                    Aussie dollars from US dollars), wired into a US bank
                    account in US dollars or reinvested into the Fund.
                  </p>
                  <a
                    className="button-edge button-edge-light"
                    href="/get-started"
                    data-wpel-link="internal"
                  >
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="icon-edge"
                    ></FontAwesomeIcon>
                    Invest with Us
                  </a>
                </article>{" "}
              </article>
            </div>
          </Col>
          <Col xs={24} md={16} xl={16}>
            <div
              className="so-panel widget widget_vr_picture aio-widget-text panel-first-child panel-last-child"
              id="panel-7584-1-0-0"
              data-index={2}
              style={{ height: "100%" }}
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://tandemuehling.com.au/wp-content/uploads/2017/03/step-01.jpg)",
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
        </Row>
        <div className="container">
          <div className="text-center return bg-white">
            <article className="text text article-simple clearfix  clearfix ">
              <span className="label label-dark">ESTIMATED RETURN FROM</span>
              <h2>Investing in this Fund</h2>
              <p>
                Our knowledge and capabilities give us the comfort level that we
                can replicate what we’ve done in the past and endeavour to
                produce 10% per annum. We are incentivised above this hurtle
                rate so we endeavour to surpass it.
              </p>
              &nbsp;
            </article>
            <Row>
              <Col xs={24} md={8} xl={8}>
                <div className="chart-circle">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 10 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={{
                            text: {
                              fontSize: "25px"
                            }
                          }}
                        />
                      );
                    }}
                  </VisibilitySensor>
                </div>
                <h3>Tandem Uehling Fund</h3>
              </Col>
              <Col xs={24} md={8} xl={8}>
                <div className="chart-circle">
                  <CircularProgressbar
                    value={0}
                    text={`${0}%`}
                    styles={{
                      text: {
                        fontSize: "25px"
                      }
                    }}
                  />
                </div>
                <h3>Other Broker/Dealer</h3>
              </Col>
              <Col xs={24} md={8} xl={8}>
                <div className="chart-circle">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 10 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={{
                            text: {
                              fontSize: "25px"
                            }
                          }}
                        />
                      );
                    }}
                  </VisibilitySensor>
                </div>

                <h3>Your Total Return per annum</h3>
              </Col>
            </Row>
            <p>
              Each investors will receive any income distributions from the
              Fund. The amount of which is expected to be 50% of income
              generated allowing the other 50% to be reinvested in additional
              property assets.
            </p>
          </div>
          <Row>
            <Col xs={24} md={12} xl={12}>
              <div className="  ll bg-white text-left">
                <h2> Property Logistics</h2>
                <div className="text-icon-left">
                  <FontAwesomeIcon
                    icon={faCog}
                    className="text-icon"
                  ></FontAwesomeIcon>

                  <div className="text-icon-content">
                    <p>
                      Properties that are genetically geared to success and
                      financial rise. These will be engineered by our team and
                      discussed before presentation to our investors.
                    </p>
                  </div>
                </div>
                <div className="text-icon-left">
                  <FontAwesomeIcon
                    icon={faAnchor}
                    className="text-icon"
                  ></FontAwesomeIcon>

                  <div className="text-icon-content">
                    <p>
                      Solid and substantial properties in prime or developing
                      areas. There is a fine line in success and we walk that
                      tightrope with professionalism here at Tandem Uehling.
                    </p>
                  </div>
                </div>
                <div className="text-icon-left">
                  <FontAwesomeIcon
                    icon={faUmbrella}
                    className="text-icon"
                  ></FontAwesomeIcon>

                  <div className="text-icon-content">
                    <p>
                      Properties that ensure safety and are sheltered from the
                      constant bombardment of additional fees and experiences.
                    </p>
                  </div>
                </div>
                <div className="text-icon-left">
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    className="text-icon"
                  ></FontAwesomeIcon>

                  <div className="text-icon-content">
                    <p>Income. Growth. Financial Freedom.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} xl={12}>
              <div className="bg-white ll">
                <article className="text clearfix ">
                  <article
                    className="text article-simple clearfix "
                    style={{ textAlign: "left" }}
                  >
                    <img
                      className=" ls-is-cached lazyloaded"
                      src="https://tandemuehling.com.au/wp-content/uploads/2017/03/certification-tandem.png"
                      data-src="https://tandemuehling.com.au/wp-content/uploads/2017/03/certification-tandem.png"
                      alt=""
                    />
                    <h2>What Do I Own?</h2>
                    <p>
                      You will own a bespoke property portfolio or shares in
                      Tandem Uehling <i>PropertyUSA</i> fund in which annual
                      distributions comprising of 50% of the net cash flow will
                      be offered to each investor..{" "}
                    </p>
                    <p>
                      At Tandem Uehling, We’ve been providing investing and
                      financing services for over 15 years now. We are an
                      independent, with our own Australian Credit License,
                      allowing you to feel safe working with us.{" "}
                    </p>
                  </article>
                </article>
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

export default Workpage;
