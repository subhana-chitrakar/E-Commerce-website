import { Container,Row,Col,Button,Card } from "react-bootstrap";
import React, { Component } from "react";
import Slider from "react-slick";
import earbuds from "../../../assets/images/earbuds.png";
import "./styles.css";
import oil from "../../../assets/images/oil.png";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";


const PreviousButton = (props) => {
  console.log(props);
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
     <ArrowBackIos style={{color:'white'}}/>
    </div>
  );
};

const NextButton =(props) =>{
    console.log(props);
    const{className,onClick} = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white" }} />
    </div>
  );
}


const PopularPicks = () =>{
      const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    }
 
      return (
        <>
          <Container>
            <Row>
              <Col className="popular-picks1">
                <h3 className="orange popular-picks1 ">
                  Our Popular Picks <i className="fa-solid fa-hand-pointer"></i>
                </h3>
                <p className="orange">Explore Dhukuti's popular picks </p>
              </Col>
            </Row>

            <div>
              <Slider
                autoplaySpeed={3000}
                {...settings}
                prevArrow={<PreviousButton />}
                nextArrow={<NextButton />}
              >
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={oil} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={oil} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={oil} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Slider>
            </div>
            {/* sdsd */}

            <div className="popular-picks2">
              <Slider
                autoplaySpeed={3000}
                {...settings}
                prevArrow={<PreviousButton />}
                nextArrow={<NextButton />}
              >
                <div className="col-3 ">
                  <Card className="popular-card-size ">
                    <Card.Img variant="top" className="earbuds" src={oil} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={oil} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={oil} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-3">
                  <Card className="popular-card-size">
                    <Card.Img variant="top" className="earbuds" src={earbuds} />
                    <Card.Body>
                      <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                      <Card.Text>
                        Rs. 1800 
                        <br></br>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </Card.Text>

                      <Button variant="primary">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping cart-icon "></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Slider>
            </div>
          </Container>
        </>
      );  



}

export default PopularPicks;