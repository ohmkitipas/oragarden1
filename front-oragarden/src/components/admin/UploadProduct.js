import React from "react";
import { Form, Input, Button, Row, Col, Divider, notification } from "antd";
import NavBar from "../NavBar";
import axios from "axios";
import Title from "antd/lib/typography/Title";
import "../../App.css";

const layout = {
  labelCol: { xs: 24, sm: 7, md: 6, lg: 6, xl: 5, xxl: 4 },
  wrapperCol: { xs: 24, sm: 17, md: 18, lg: 18, xl: 19, xxl: 20 },
};

export default function UploadProduct(props) {
   const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const body = {
      name: values.name,
      description: values.description,
      detail: values.detail,
      price: values.price,
      img1: values.img1,
      img2: values.img2,
      img3: values.img3,
      img4: values.img4,
      img5: values.img5,
      category_id: values.category_id,
      level_id: values.level_id,
      water_id: values.water_id,
    };
    axios
      .post("/products/create", body)
      .then((res) => {
        notification.success({
          message: `${values.name} success create`,
        });
        props.history.push("/products");
      })
      .catch((err) => {
        notification.error({
          message: `${values.name} don't success create`,
        });
      });
  };

  return (
    <div>
      <NavBar />
      <div>
        <Row justify="center">
          <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
            <div className="Form">
              <Row justify="start">
                <Title level={2} className="Title">
                  Product Create
                </Title>
              </Row>
              <Divider className="Divider" />
              <Form {...layout} onFinish ={onFinish} style={{ width: "100%" }}>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please product name",
                    },
                  ]}
                >
                  <Input placeholder="name" />
                </Form.Item>

                <Form.Item name="description">
                  <Input placeholder="description" />
                </Form.Item>

                <Form.Item name="detail">
                  <Input placeholder="detail" />
                </Form.Item>

                <Form.Item
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please input product price!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input placeholder="price" />
                </Form.Item>

                

                <Button className="Button" htmlType="submit">
                  CREATE
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
