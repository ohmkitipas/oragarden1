import React from 'react';
import NavBar from '../NavBar';
import { Col, Divider, Row, Form, Input, Button, notification } from 'antd';
import axios from '../../config/axios';
import LocalStorageService from '../../services/localStorageService';
import Title from 'antd/lib/typography/Title';

const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 }
};


export default function Login(props) {
    
    const onFinish = values => {
        const body = {
            username: values.username,
            password: values.password
        };
        axios.post("/users/login", body)
        .then(result => {
            LocalStorageService.setToken(result.data.token);
            props.setRole("user");
        })
        .catch(err => {
            notification.error({
                 message: `Login Failed.`
            });
        });
    };


    return (
        <div>
            <NavBar />
            <Row justify="center">
                <Col xs={23} sm={23} md ={23} lg={14} xl={14} xxl={6} >
                    <div className="Form">
                        <Row justify ="center" >
                            < Title level={2} className="Title">
                                Login
                            </Title>
                        </Row>
                        <Divider className="Divider" />
                        <Form
                            className="App"
                            {...layout}
                            onFinish={onFinish}
                            style={{ width: "100%" }}
                        >
                            <Form.Item
                              name="username"
                              rules={[{ required: true, message: "Please input Email!" }]}
                            > 
                            <Input placeholder ="Username"/>
                            </Form.Item>

                            <Form.Item                             
                              name="password"
                              rules= {[{ required: true, message: "Please input password!" }]}
                              >
                                  <Input.Password placeholder= "Password"/>
                              </Form.Item>

                              <Button className="Button" htmlType="submit">
                                  Login
                              </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
