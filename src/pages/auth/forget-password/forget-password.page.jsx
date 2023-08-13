import React, { useState } from "react";
import { Col, Container, Row, Button, Card, Form} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Auth } from "..";
import HeaderSection from "../../home/component/header.componet";
import AuthService from "../auth.service";



const ForgetPassword = () => {
    let [loading, setLoading] = useState(false);
 const authSvc = new AuthService();
  const loginSchema = Yup.object({
    email:Yup.string().email().required()
  });

  const formik = useFormik({
    initialValues:{
      email:"",
    },

    validationSchema:loginSchema,
    onSubmit: async (values)=>{
         setLoading(true);

         try{
              const response = await Auth.authSvc.forgetPassword(values.email);
              
        localStorage.setItem("email", values.email);

        if (response.status === true) {
          toast.success(response.msg);
        } else {
          toast.error(response.msg);
        }
      }
         
         catch(axiousErrorResponse){
         toast.error("Error occurred. Please try again later.");
          console.log(axiousErrorResponse)
         }

          setLoading(false);
    }
  })



  return (
    <>
      <HeaderSection />

      <Container className="my-5 login-page">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}></Col>
          <h1 className="text-center">Reset your Password</h1>
          <hr />
        </Row>

        <Row>
          <Col sm={12}>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="row mb-3 mt-5">
                <Form.Label className="col-sm-3">Email Address: </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email.."
                    size="sm"
                    onChange={formik.handleChange}
                  ></Form.Control>

                  <span className="text-danger">{formik.errors?.email}</span>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Col sm={{ offset: 3, span: 9 }}>
                  <Button
                    variant="success"
                    disabled={loading}
                    type="submit"
                    className="mt-3"
                  >
                    <i className="fa fa-paper-plane"></i> Submit
                  </Button>
                  <p>
                    <br />
                    Go back to
                    <NavLink className="go-to ms-2" to="/login">
                      Login Page
                    </NavLink>
                  </p>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ForgetPassword;
