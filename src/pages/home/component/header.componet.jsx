import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import "./styles.css";
import { NavLink } from "react-router-dom";

const HeaderSection = () => {
  return (
    <>
      {/* top-nav */}
      <Container>
        <div className="right-section">
          <ul>
            <li>
              <a href="">Advertise On Dhukuti</a>
            </li>
            <li>
              <a href="">Sell On Dhukuti </a>
            </li>
            <li>
              <a href="">Raise a ticket </a>
            </li>
            <li>
              <a href="">Order Tracking</a>
            </li>
          </ul>
        </div>

        <div className="icons">
          <p>Connect with us </p>
          <i className="fa-brands fa-facebook-f fb"></i>
          <i className="fa-brands fa-instagram insta"></i>
          <i className="fa-solid fa-envelope email"></i>
        </div>
      </Container>

      {/* search-section */}
      <Container fluid className="logo-section">
        <NavLink className={"logo"} to="/">
          <div className="logo">
            <img src={logo} className="logo-img" />
          </div>
        </NavLink>
        <Form className="d-flex search-section">
          <Form.Control
            type="search"
            placeholder="Search entire store here..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Nav>
          <NavLink to="/cart" className="cart-section">
            Cart
            <i className="fa-solid fa-cart-shopping cart-icon ">
              <span>( 0 )</span>
            </i>
          </NavLink>
        </Nav>
      </Container>

      {/* Categories-section */}
      <Navbar collapseOnSelect expand="xl" className="categories-section">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="responsive-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link font-weight-bold text-uppercase"
              >
                Home
              </NavLink>
            
            </li>
            <li className="nav-item dropdown megamenu">
              <NavLink
                to="/categories"
                id="megamneu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
              >
                Categories
              </NavLink>
              <div
                aria-labelledby="dropdownMenuButton1"
                className="dropdown-menu border-0 p-0 m-0 "
              >
                <div className="container">
                  <div className="row bg-white rounded-0 m-0 shadow-sm">
                    <div className="col-lg-4 col-xl-4">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-lg-4 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              Groceries
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a href="" className="nav-link text-small pb-0">
                                  Unique Features
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Image Responsive
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Auto Carousel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Newsletter Form
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-3 mb-3">
                            <h6 className="font-weight-bold text-uppercase">
                              Electronics
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Unique Features
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Image Responsive
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Auto Carousel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Newsletter Form
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-3 mb-3">
                            <h6 className="font-weight-bold text-uppercase">
                              Home & Lifestyle
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Unique Features
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Image Responsive
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Auto Carousel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Newsletter Form
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="col-lg-3 mb-3">
                            <h6 className="font-weight-bold text-uppercase">
                              Women's Fashion
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Unique Features
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Image Responsive
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Auto Carousel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Newsletter Form
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              Mens's Fashion
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Unique Features
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Image Responsive
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Auto Carousel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Newsletter Form
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              Health & Beauty
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Unique Features
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Image Responsive
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Auto Carousel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Newsletter Form
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link font-weight-bold text-uppercase"
                to="/brands"
              >
                Brands
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Products"
                className="nav-link font-weight-bold text-uppercase"
              >
                Products <span className="line"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Login"
                className="nav-link font-weight-bold text-uppercase"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Register"
                className="nav-link font-weight-bold text-uppercase "
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </Navbar>
    </>
  );
};

export default HeaderSection;
