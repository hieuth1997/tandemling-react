import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import NewsMenu from './NewsMenu'

import logo from "./../../Static/Img/logo.png";
import NavLink from "react-bootstrap/NavLink";
import "antd/dist/antd.css";

class MenuTop extends Component {
  handleOpenSearch = () => {
    this.props.handleOpenSearch();
  };
  render() {
    return (
      <div className="menu">
        <Container>
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
              <img className="logo img-fluid" alt="img" src={logo}/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link>
                  <Link to="/">
                    <div className="custom-link">Home</div>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">
                    <div className="custom-link">About Us</div>
                  </Link>
                </Nav.Link>
                {/* <NavDropdown as="#" title="how it work" className="nav-link" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Information Package <br/>Investors</NavDropdown.Item>
                            </NavDropdown> */}
                <Nav.Link className="news-link">
                  <Link to="/work">
                    <div className="custom-link">
                      How it Work <Icon type="down" className="icon" />
                    </div>
                  </Link>
                  <div className="sub-menu">
                    <Link to="invest">
                      <div className="drop-item">
                        Information Package <br />
                        Investors
                      </div>
                    </Link>
                  </div>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link to="success">
                    <div className="custom-link">Successes</div>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <div className="custom-link">news</div>
                  <NewsMenu />
                </Nav.Link>
                <Nav.Link className="news-link">
                  <div className="custom-link">
                    service <Icon type="down" className="icon" />
                  </div>
                  <div className="sub-menu">
                    <div className="drop-item">
                      <div className="sub-2-menu">
                        <div className="dropdown">Buying House</div>
                        <Icon className="icon-right" type="right" />
                      </div>
                      <div className="menu-sub-display">
                        <div className="drop-item">
                          Information Package Investors
                        </div>
                      </div>
                    </div>
                    <div className="drop-item">
                      <div className="sub-2-menu">
                        <div className="dropdown">property Invertment</div>
                        <Icon className="icon-right" type="right" />
                      </div>
                      <div className="menu-sub-display">
                        <div className="drop-item">
                          Information Package Investors
                        </div>
                      </div>
                    </div>

                    <div className="drop-item">
                      <div className="sub-2-menu">
                        <div className="dropdown">
                          property Invertment service
                        </div>
                        <Icon className="icon-right" type="right" />
                      </div>
                      <div className="menu-sub-display">
                        <div className="drop-item">
                          Information Package Investors
                        </div>
                      </div>
                    </div>

                    <div className="drop-item">
                      <div className="sub-2-menu">
                        <div className="dropdown">property Loan</div>
                        <Icon className="icon-right" type="right" />
                      </div>
                      <div className="menu-sub-display">
                        <div className="drop-item">
                          Information Package Investors
                        </div>
                      </div>
                    </div>
                  </div>
                </Nav.Link>

                <Nav.Link>
                  <div className="custom-link">Contact Us</div>
                </Nav.Link>
                <NavLink>
                  {" "}
                  <div className="custom-link">Sign Up</div>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <div className="search-btn" onClick={this.handleOpenSearch}>
          {" "}
          <Icon className="icon-search" type="search" />
        </div>
      </div>
    );
  }
}

export default MenuTop;
