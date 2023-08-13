import { Container,Row,Col } from "react-bootstrap";
import HeaderSection from "../../pages/home/component/header.componet";




const Product = () =>{
  return (
    <>
     <HeaderSection/>
      <Container className="my-5">
        <Row className="my-5">
          <Col>Products</Col>
        </Row>
      </Container>
    </>
  );
}

export default Product;