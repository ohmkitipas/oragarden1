import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import LocalStorageService from "../../services/localStorageService";
import jwtDecode from "jwt-decode";
import NavBar from "../NavBar";
import '../../App.css';
import Footer from "../Footer";

export default function Profile(props) {
    const [name,setName] = useState("");
    const [ id,setId] = useState(0);
    const logout = () => {
        LocalStorageService.removeToken();
        props.setRole("guest");
    };

    useEffect(() => {
        const token= LocalStorageService.getToken();
        if(token) {
            const user=jwtDecode(token);
            setName(user.name);
            setId(user.id);
        }
    }, [])
  return (
    <div>
        <NavBar />
      <div >
          <Row justify="center" className="profileBox" >
            <Col xs={24} sm={22} md={20} lg={14} xl={12} xxl={12} >
                  <div >
                     <h2 > Hello ... </h2>
                     <p> 
                         <strong>Name: </strong> {name}
                         <strong>Id: </strong> {id}
                     </p>    
                  </div>   
            </Col>
          </Row>
            <Row className="profileBox">
              <Col xs={24} sm={22} md={20} lg={14} xl={10} xxl={8}>
                 <h3>
                     Address
                     
                     </h3>
              </Col>
              <Col xs={24} sm={22} md={20} lg={14} xl={10} xxl={8}>
              <h3>
                deatail

              </h3>
              </Col>   
            </Row>  
            <Button onclick={logout}>logout</Button>
      </div>
      <Footer />
    </div>
  );
}
