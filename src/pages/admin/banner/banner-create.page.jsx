import {
  Container,
  Card,
  Breadcrumb,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPaperPlane, FaRedo } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import banner from ".";
import { toast } from "react-toastify";

const BannerCreateForm = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    title: Yup.string().required(),
    link: Yup.string().url().nullable(),
    startDate: Yup.date().required(),
    endDate: Yup.date().min(Yup.ref("startDate")).required(),
    status: Yup.string()
      .matches(/active|inactive/)
      .required(),
    image: Yup.string().required("Required"),
    
  });

  let formik = useFormik({
    initialValues: {
      title: "",
      link: "",
      startDate: "",
      endDate: "",
      status: "",
      image: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (value) => {
      try {
        const response = await banner.bannerSvc.createBanner(value);
        toast.success(response.msg);
        navigate("/admin/banner");
      } catch (exception) {
        toast.error("Cannot create banner.Retry again.");
      }
    },
  });

  return (
    <>
      <Container fluid className="px-4 ">
        <Row>
          <Col sm={12} md={6}>
            <h1>Banner Create Page</h1>
          </Col>
          <Col md={6} sm={12} className="d-none d-md-block">
            <NavLink className={"btn btn-sm btn-success mt-3  float-end"}>
              <FaArrowLeft className={"me-1"} />
              Go To List
            </NavLink>
          </Col>
        </Row>

        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <NavLink to="/admin">Dashboard</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/admin/banner">Banner Listing</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Banner Create</Breadcrumb.Item>
        </Breadcrumb>

        <Card className="mb-4">
          <Card.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Title: </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter Banner Title"
                    required
                    onChange={formik.handleChange}
                    size="sm"
                    values={formik.values?.title}
                  />
                  <span className="text-danger">{formik.errors?.title}</span>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Link</Form.Label>
                <Col className="sm-9">
                  <Form.Control
                    type="url"
                    name="link"
                    size="sm"
                    onChange={formik.handleChange}
                    values={formik.values?.link}
                    placeholder="Enter your banner link "
                  />
                  <span className="text-danger">{formik.errors?.link}</span>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3"> Date(Start-End): </Form.Label>
                <Col sm={9}>
                  <Row>
                    <Col sm={6}>
                      <Form.Control
                        type="date"
                        required
                        onChange={formik.handleChange}
                        name="startDate"
                        values={formik.values?.startDate}
                      />
                      <span className="text-danger">
                        {formik.errors?.startDate}
                      </span>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        type="date"
                        required
                        name="endDate"
                        values={formik.values?.endDate}
                        onChange={formik.handleChange}
                      />
                      <span className="text-danger">
                        {formik.errors?.endDate}
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Status: </Form.Label>
                <Col className="sm-9">
                  <Form.Select
                    name="status"
                    required
                    values={formik.values?.status}
                    onChange={formik.handleChange}
                    size="sm"
                  >
                    <option>-- Select Any one --</option>
                    <option value={"active"}>Publish</option>
                    <option value={"inactive"}>Un-Publish</option>
                  </Form.Select>
                  <span className="text-danger">{formik.errors?.status}</span>
                </Col>
              </Form.Group>

            
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Image: </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                    size="sm"
                    onChange={(e) => {
                      let file = e.target.files[0];
                      let ext = file.name.split(".").pop();
                      if (
                        [
                          "jpg",
                          "jpeg",
                          "png",
                          "gif",
                          "bmp",
                          "webp",
                          "svg",
                        ].includes(ext.toLowerCase())
                      ) {
                        formik.setValues({
                          ...formik.values,
                          image: Yup.string,
                        });
                            // formik.setFieldValue("image", file);
                      } else {
                        formik.setErrors({
                          ...formik.errors,
                          image: "File format not supported",
                        });
                      }
                    }}
                  />

                  <span className="text-danger">{formik.errors?.image}</span>
                </Col>
              </Form.Group>
              <Form.Group className="row mb-3 ">
                <Col sm={{ offset: 3, span: 9 }}>
                  <Button
                    variant="danger"
                    type="reset"
                    size="sm"
                    className="me-3"
                  >
                    <FaRedo className="me-2" />
                    Cancel
                  </Button>
                  <Button variant="success" type="submit" size="sm">
                    <FaPaperPlane className="me-2" />
                    Submit
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default BannerCreateForm;


