import React, { useState } from "react";
import { Col, Container, Row, Button, Card, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Auth } from "..";
import HeaderSection from "../../home/component/header.componet";
import AuthService from "../auth.service";

const SetPassword = () => {
  let [loading, setLoading] = useState(false);
 const Navigate =useNavigate();
  const authSvc = new AuthService();

  const SetPasswordSchema = Yup.object({
    newPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required(),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required(),
  });

  const formik = useFormik({
    initialValues: {
      email: localStorage.getItem("email"),
      newPassword: "",
      confirmNewPassword: "",
    },

    validationSchema: SetPasswordSchema,
    onSubmit: async (values) => {
      setLoading(true);

      try {
        setLoading(true);
        const response = await Auth.authSvc.resetPassword(
          values.email,
          values.newPassword
        );
        toast.success(
          "Password has been reset successfully. Please Login to continue"
        );

        Navigate("/login");

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });
      
  

  return (
    <>
      <HeaderSection />

      <Container className="my-5 login-page">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}></Col>
          <h1 className="text-center">Change your Password</h1>
          <hr />
        </Row>

        <Row>
          <Col sm={12}>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="row mb-3 mt-5">
                <Form.Label className="col-sm-3">New Password: </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your new password..."
                    size="sm"
                    onChange={formik.handleChange}
                  ></Form.Control>

                  <span className="text-danger">{formik.errors?.email}</span>
                </Col>
              </Form.Group>
              <Form.Group className="row mb-3 mt-5">
                <Form.Label className="col-sm-3">Confirm Password: </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Confirm your password..."
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
                    <i className="fa fa-paper-plane"></i> Change your password
                  </Button>
                 
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SetPassword;
