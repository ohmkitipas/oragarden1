import React from "react";
import { Form, Input, Button, Row, Col, Divider, notification } from "antd";
import NavBar from "../NavBar";
import axios from "../../config/axios";
import Title from "antd/lib/typography/Title";
import { withRouter } from "react-router-dom";

const layout = {
  labelCol: { xs: 24, sm: 7, md: 6, lg: 6, xl: 5, xxl: 4 },
  wrapperCol: { xs: 24, sm: 17, md: 18, lg: 18, xl: 19, xxl: 20 },
};

function Register(props) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const body = {
      username: values.email,
      password: values.password,
      name: values.name,
      lastName: values.lastName,
      tell: values.tell,
      address: values.address,
    };
    axios
      .post("/users/register", body)
      .then((res) => {
        notification.success({
          message: `${values.name} success register`,
        });
        props.history.push("/login");
      })
      .catch((err) => {
        notification.error({
          message: `${values.nickname} don't success register`,
        });
      });
  };

  return (
    <div>
      <NavBar />
      <Row justify="center">
        <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
          <div className="Form">
            <Row justify="center">
              <Title level={2} className="Title">
                Register
              </Title>
            </Row>
            <Divider className="Divider" />
            <Form {...layout} onFinish={onFinish} style={{ width: "100%" }}>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item
                name="confirm"
                hasFeedback
                dependencies={["pass"]}
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "Confirm Password must same the Password."
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>

              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Last name" />
              </Form.Item>

              <Form.Item
                name="tell"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Phone number" />
              </Form.Item>

              <Form.Item name="address">
                <Input.TextArea placeholder="Address" />
              </Form.Item>

              <Button className="Button" htmlType="submit">
                Register
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(Register);
