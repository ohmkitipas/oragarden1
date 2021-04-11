import { Col, Row } from 'antd';
import React from 'react';
import { logo } from '../picture/logo.jpg';



export default function Footer(props) {
    return (
        <div className="footer">
            <Row justify="center">
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                  <img src={logo} alt="garden" height="80" align="center"/>
                  <h2>  Contact</h2>
                  <h3> +6681 825 0908</h3>
                  <h3> </h3>
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                test2
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                test3
                </Col>

            </Row>
        </div>
    )
}
