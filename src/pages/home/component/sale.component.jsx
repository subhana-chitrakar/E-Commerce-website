import { Container,Button,Card,Row,Col } from "react-bootstrap";
import "./styles.css";
import shirt from "../../../assets/images/tshirt.png";
import earbuds from "../../../assets/images/earbuds.png";
import books from "../../../assets/images/book.png";
import chia from "../../../assets/images/chia.png";
import sandel from "../../../assets/images/sandel.png";
import oil from "../../../assets/images/oil.png";
import serum from "../../../assets/images/serum.png";
import eclairs from "../../../assets/images/eclairs.png";
import ad from "../../../assets/images/ad.jpg";
import { useState, useEffect } from "react";
import CounterTimer from "./counter";

const SaleSection = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
   const [timerDays, setTimerDays] = useState();
   const [timerHours, setTimerHours] = useState();
   const [timerMinutes, setTimerMinutes] = useState();
   const [timerSeconds, setTimerSeconds] = useState();

   let interval;
   const startTimer = () => {
     const countDownDate = new Date("September 10,2023").getTime();

     interval = setInterval(() => {
       const now = new Date().getTime();
       const distance = countDownDate - now;

       const days = Math.floor(distance / (24 * 60 * 60 * 1000));
       const hours = Math.floor(
         (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
       );
       const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
       const seconds = Math.floor((distance % (60 * 1000)) / 1000);

       if (distance < 0) {
         clearInterval(interval.current);
       } else {
         setTimerDays(days);
         setTimerHours(hours);
         setTimerMinutes(minutes);
         setTimerSeconds(seconds);
       }
     });
   };

   useEffect(() => {
     startTimer();
   });
  return (
    <>
      <Container fluid className="sale-section-header">
        <p className="on-sale"> On Sale Now</p>
        <h5 className="timer">Ending in</h5>
        <div className="timer-container">
          <CounterTimer
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
        </div>
        <h1 className="flash-sale">FLASH SALE</h1>
        <Button variant="outline-dark shop-button">Shop More</Button>
      </Container>
     
      <Container className="item-card">
        <div className="row sale-cards">
          <div className="col-3">
            <Card className="card-size">
              <Card.Img variant="top" className="sale-img" src={shirt} />
              <Card.Body>
                <Card.Title>Plain T-shirt For Men</Card.Title>
                <Card.Text>
                  Rs. 345 <span className="before-price">Rs.400</span>
                  <br></br>
                  <br></br>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
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
            <Card className="card-size">
              <Card.Img variant="top" className="earbuds1" src={earbuds} />
              <Card.Body>
                <Card.Title>Pro 6 Bluetooth Earphone</Card.Title>
                <Card.Text>
                  Rs. 1800 <span className="before-price">Rs.2000</span>
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
            <Card className="card-size">
              <Card.Img variant="top" className="book-img " src={books} />
              <Card.Body>
                <Card.Title>Harry Potter Box Set By J.K.Rowling</Card.Title>
                <Card.Text>
                  Rs. 3750 <span className="before-price">Rs.3999</span>
                  <br></br>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </Card.Text>
                <Button variant="primary">
                  Add to Cart
                  <i className="fa-solid fa-cart-shopping cart-icon "></i>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card className="card-size">
              <Card.Img variant="top" className="earbuds1" src={chia} />
              <Card.Body>
                <Card.Title>Chia Seed - 400gm</Card.Title>
                <Card.Text>
                  Rs. 400 <span className="before-price">Rs.480</span>
                  <br></br>
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
        </div>

        <div className="row sale-section2">
          <div className="col-3 ">
            <Card className="card-size">
              <Card.Img variant="top" className="eclairs" src={eclairs} />
              <Card.Body>
                <Card.Title>Eclairs Milk Chocolate - 100 Pcs</Card.Title>
                <Card.Text>
                  Rs. 100 <span className="before-price">Rs.130</span>
                  <br></br>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
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
            <Card className="card-size">
              <Card.Img variant="top" className="earbuds" src={sandel} />
              <Card.Body>
                <Card.Title>Women's Sandel</Card.Title>
                <Card.Text>
                  Rs. 330 <span className="before-price">Rs.400</span>
                  <br></br>
                  <br></br>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
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
            <Card className="card-size">
              <Card.Img variant="top" className="earbuds" src={oil} />
              <Card.Body>
                <Card.Title>Extra Virgin Coconut Oil - 180ml</Card.Title>
                <Card.Text>
                  Rs. 550 <span className="before-price">Rs.630</span>
                  <br></br>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </Card.Text>
                <Button variant="primary">
                  Add to Cart
                  <i className="fa-solid fa-cart-shopping cart-icon "></i>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card className="card-size">
              <Card.Img variant="top" className="earbuds" src={serum} />
              <Card.Body>
                <Card.Title>Olay Serum -120ml</Card.Title>
                <Card.Text>
                  Rs. 630 <span className="before-price">Rs.700</span>
                  <br></br>
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
        </div>
      </Container>

      <div>
        <img className="ad1" src={ad} />
      </div>
    </>
  );
};

export default SaleSection;
