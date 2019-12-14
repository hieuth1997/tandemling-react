import React, { Component, Fragment } from "react";
import Slider from "./Slider";
import { Row, Col, Icon, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUmbrella,
  faUserFriends,
  faHome,
  faMoneyCheck,
  faPencilAlt,
  faDownload,
  faEnvelope,
  faPhoneAlt,
  faQuoteLeft,
  faQuoteRight,
  faAnchor,
  faChartLine,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import CardAbout from "./CardAbout";
import Calculate from "./Calculate";
import aboutSlide1 from "./../../Static/Img/about/finance-icon.png";
import aboutSlide2 from "./../../Static/Img/about/property-finacing-02.png";
import aboutSlide3 from "./../../Static/Img/about/property-research.png";
import logo1 from "./../../Static/Img/icon-1-work.png";
import logo2 from "./../../Static/Img/icon-2-work.png";
import logo3 from "./../../Static/Img/icon-3-work.png";
import female from "./../../Static/Img/female-profile.jpg";
import male from "./../../Static/Img/male-profile.jpg";
import NewsCard from "./NewsCard";
import replaceImg from './../../Static/Img/replace.png'
import "./style.scss";
import "antd/dist/antd.css";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "YEAR",
        dataIndex: "year",
        key: "name",
        className: "col-year",
      },
      {
        title: "TANDEM UEHLING",
        dataIndex: "money",
        key: "money",
        className: "col-money",
        render: text => <div className="data-money">{`$${text}`}</div>
      }
    ];
    this.state = {
      moneys: [
        {
          key: 1,
          year: 1,
          money: "22,000"
        },
        {
          key: 2,
          year: 2,
          money: "24,200"
        },
        {
          key: 3,
          year: 3,
          money: "26,620"
        },
        {
          key: 4,
          year: 4,
          money: "29,282"
        },
        {
          key: 5,
          year: 5,
          money: "32,200"
        },
        {
          key: 6,
          year: 6,
          money: "35,430"
        },
        {
          key: 7,
          year: 7,
          money: "38,947"
        },
        {
          key: 8,
          year: 8,
          money: "42,870,"
        },
        {
          key: 9,
          year: 9,
          money: "47,158,"
        },
        {
          key: 10,
          year: 10,
          money: "51,876"
        }
      ],
      aboutData: [
        {
          img: aboutSlide1,
          title: "Bespoke Portfolio",
          content:
            "With our bespoke portfolio service, we have researched financial strategies for clients that have the ability to invest independently to ensure a high annual return with our property investment services."
        },
        {
          img: aboutSlide2,
          title: "Property Fund",
          content:
            "With our bespoke portfolio service, we have researched financial strategies for clients that have the ability to invest independently to ensure a high annual return with our property investment services."
        },
        {
          img: aboutSlide3,
          title: "Property Finance",
          content:
            "With our bespoke portfolio service, we have researched financial strategies for clients that have the ability to invest independently to ensure a high annual return with our property investment services."
        }
      ]
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  getMoney = value => {
    let moneys = this.state.moneys;
    let editMoney = moneys.map(item => {
      let newMoney = item.year * (value + value * 0.1);
      item.money = newMoney.toLocaleString();
      console.log(item.money);
      return item;
    });
    
    console.log(editMoney);
    this.setState({
      moneys: editMoney
    });
  };
  componentWillMount()
  {
    console.log("will-mount-homepage")
  }

  render() {
    const { aboutData } = this.state;
    const aboutCard = aboutData.map((item, index) => {
      return (
        <Col key={index} md={8} lg={8}>
          <CardAbout
            urlImg={item.img}
            title={item.title}
            content={item.content}
          ></CardAbout>
        </Col>
      );
    });
    const data = this.state.moneys;
    const columns = this.columns;
    
    

    return (
      <Fragment>
        <Slider />
        <div className="about">
          <Row type="flex">
            <Col md={24} lg={8}>
              <div className="pannel">
                <div className="about-card">
                  <article className="content">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="custom-icon"
                    ></FontAwesomeIcon>
                    <h2 className="title">
                      About Us <br />
                      Tandem Uehling
                    </h2>
                    <div className="buttom-sea">Read more about us</div>
                    <p>
                      At Tandem Uehling, prosperity and income is what we
                      endeavour to accomplish. With care and researched
                      financial strategies, you will feel secure working with
                      us.{" "}
                    </p>
                  </article>
                </div>
              </div>
            </Col>
            <Col md={24} lg={16}>
              <Row type="flex">{aboutCard}</Row>
            </Col>
          </Row>
        </div>
        <div className="invester-usa">
          <Row type="flex">
            <Col xs={24} md={24} lg={8}>
              <div className="pannel">
                <div className="img-invester"></div>
              </div>
            </Col>
            <Col  md={24}lg={16}>
              <Row type="flex">
                <Col md={12}>
                  <div className="contain-invester">
                    <article>
                      <FontAwesomeIcon
                        icon={faUmbrella}
                        className="custom-icon"
                      ></FontAwesomeIcon>
                      <br />
                      <span>BE AN ACCREDITED INVESTOR IN USA</span>
                      <h2 className="">
                        How do I know if I am an Accredited Investor as defined
                        by the SEC in the USA?
                      </h2>
                      <p>
                        An accredited investor is a person or entity that can
                        deal with securities not registered with financial
                        authorities by satisfying one of the requirements
                        regarding income, net worth, asset size, governance
                        status or professional experience.
                      </p>
                      <p>
                        <strong>
                          If you would like to verify if you qualify as an
                          accredited investor, then call us NOW on{" "}
                          <a href="tel:1300 854 431" data-wpel-link="internal">
                            1300 854 431
                          </a>
                        </strong>
                      </p>
                    </article>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="list-icon">
                    <article>
                      <div className="counter">
                        <FontAwesomeIcon
                          icon={faUserFriends}
                          className="icon"
                        ></FontAwesomeIcon>
                        <div className="counter-body">
                          <span className="counter-number" data-number="825">
                            825
                          </span>
                          <span>+</span>
                        </div>
                        <h3>Members</h3>
                      </div>
                      <div className="counter">
                        <FontAwesomeIcon
                          icon={faHome}
                          className="icon"
                        ></FontAwesomeIcon>
                        <div className="counter-body">
                          <span className="counter-number" data-number="825">
                            3250
                          </span>
                          <span>+</span>
                        </div>
                        <h3>Purchased Properties</h3>
                      </div>
                      <div className="counter">
                        <FontAwesomeIcon
                          icon={faMoneyCheck}
                          className="icon"
                        ></FontAwesomeIcon>
                        <div className="counter-body">
                          <span className="counter-number" data-number="825">
                            1534
                          </span>
                          <span>+</span>
                        </div>
                        <h3>Settled Sales</h3>
                      </div>
                    </article>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
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
                        If you want to invest in US property, but don’t know
                        where to start then look no further. Our aim is helping
                        our clients secure the best investment properties the US
                        has to offer. Signup today with us for precise and
                        researched property investments.
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
                            This eBook covers the benefits of investing in the
                            US properties without exhausting all your capital,
                            taking advantage of volume purchasing, investing in
                            diverse types of properties and much more.
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
        </div>
        <div className="how-it-work">
          <div className="container">
            <div className="banner-inner">
              <h2 className="color-dark">
                How it <strong className="color-main">Works</strong>
              </h2>
              <div className="contain text-center">
                At Tandem Uehling PropertyUSA, we strive to give each Australian
                the ability to add US property income to each of their long-term
                investment objectives.
              </div>
              <br />
              <div className="button-edge  work-button mr-3 mt-3">
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="icon-edge"
                ></FontAwesomeIcon>
                Invest with Us
              </div>
              <div className="button-edge mr-3 mt-3">
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="icon-edge"
                ></FontAwesomeIcon>
                Success Stories
              </div>
              <div className="button-edge mr-3 mt-3">
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="icon-edge"
                ></FontAwesomeIcon>
                Contact Us
              </div>
            </div>
            <Row type="flex">
              <Col md={8}>
                <div className="works-card text-center">
                  <img className=" lazyloaded" src={logo1} alt="" />
                  <h3 className="color-dark">You Invest</h3>
                  <p className="color-dark">
                    We leverage our skills and experience to reduce your risk,
                    headaches and maximise your profits.
                  </p>
                </div>
              </Col>
              <Col md={8}>
                <div className="works-card text-center">
                  <img className=" lazyloaded" src={logo2} alt="" />
                  <h3 className="color-dark">We Generate Income</h3>
                  <p className="color-dark">
                    Our portfolio of properties generates income from our
                    meticulous due diligence.
                  </p>
                </div>
              </Col>
              <Col md={8}>
                <div className="works-card text-center">
                  <img className=" lazyloaded" src={logo3} alt="" />
                  <h3 className="color-dark">You Get Paid</h3>
                  <p className="color-dark">
                    We pay you cash dividends from the plethora of property
                    sources.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Row type="flex">
          <Col xs={24} md={12}>
            <div className="bg-sea">
              <article className="slider">
                <Calculate getMoney={this.getMoney} />
              </article>
              <Row type="flex">
                <Table
                  className="table-invest"
                  columns={columns}
                  pagination={false}
                  dataSource={data}
                />
                <p className="text-center">
                  Our knowledge and capabilities give us the comfort level that
                  we can replicate what we’ve done in the past and endeavour to
                  produce 10% per annum with partial reinvestment of dividends,
                  with 2% annual property value increase starting from the
                  second year <sup>[1]</sup>.
                </p>
              </Row>
            </div>
          </Col>
          <Col md={12}>
            <div className="bg-dark-blue calculate">
              <article className="content">
                <Icon type="calculator" className="big-icon" />
                <h2 class="">
                  Calculate <br />
                  Your Investment Earnings
                </h2>
                <p>
                  Let's face it, property requires a good amount of capital
                  regardless of how attractive values are in the USA. The cheap
                  properties are fraught with risk. The good stuff cost more
                  albeit substantially less than what you can find in Australia.
                  In order to purchase properly in the right areas and diversify
                  into different types of investments, a sizable amount of
                  capital will always produce a better return than an
                  individual's portfolio. Also, where there is volume there
                  usually are discounts.
                </p>
                <p>
                  Use this investment earning calculator to estimate how much
                  your investment might grow.{" "}
                </p>
                <p>
                  <strong>
                    If you think this is the right move for you, or you’d like
                    to find out more, then contact us today!
                  </strong>{" "}
                </p>
                <div className="button-light mr-md-4 mb-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="icon-edge"
                  ></FontAwesomeIcon>
                  Contact Us
                </div>
                <div className="button-light">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="icon-edge"
                  ></FontAwesomeIcon>
                  CALL US ON 1300 854 431
                </div>
              </article>
            </div>
          </Col>
        </Row>
        <Row type="flex">
          <Col xs={24} sm={24} md={12}>
            <div className="bg-dark-blue calculate">
              <article className="content text-right">
                <Icon type="calculator" className="big-icon" />
                <h2 class="">Need Help?</h2>
                <h4>
                  ...with understanding the current <br />
                  property market in USA?
                </h4>
                <p>
                  With a variety of investment vehicles to choose from, which is
                  the right one for your circumstances? We can offer you
                  services in the fund or bespoke portfolio.{" "}
                </p>
                <p>
                  <strong>For more information, call us today on:</strong>
                  <h2 className="phone-number">1300 ­854 431</h2>
                </p>
              </article>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="img-contact"></div>
          </Col>
        </Row>
        <div className="news">
          <div className="container">
            <h2 className="color-dark text-center">Our Latest News</h2>
            <Row type="flex" gutter={24}>
              <Col xs={24} md={8}>
                <NewsCard />
              </Col>
              <Col xs={24} md={8}>
                <NewsCard />
              </Col>
              <Col xs={24} md={8}>
                <NewsCard />
              </Col>
            </Row>
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
             <FontAwesomeIcon icon={faUserPlus}>

             </FontAwesomeIcon>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Homepage;
