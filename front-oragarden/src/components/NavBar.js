import React, { useState } from "react";
import logo from "../picture/logo.jpg";
import {
  Nav,
  NavLink,
  RightNav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavElements";
import "../App.css";
import { Drawer } from "antd";

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = (e) => {
    setVisible(true);
  };

  const onClose = (e) => {
    setVisible(false);
  };

  return (
    <Nav>
      <NavLink to="/">
        <img
          src={logo}
          alt="oragarden"
          height="64"
          justify-content="flex-start"
        />
      </NavLink>
      <NavMenu>
        <NavLink to="/products" activeStyle>
          PRODUCT
        </NavLink>
        <NavLink to="/plantCare" activeStyle>
          PLANT CARE
        </NavLink>
        <NavLink to="/aboutUs" activeStyle>
          ABOUT US
        </NavLink>
      </NavMenu>
      <RightNav>
        <NavLink to="/register" activeStyle>
          Sign Up
        </NavLink>
        <NavBtn>
          <NavBtnLink to="/login">Sign In</NavBtnLink>
        </NavBtn>
      </RightNav>
      <Bars onClick={showDrawer}></Bars>
      <Drawer
        title="ORAGARDEN"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <a href="/products">PRODUCT</a> <br />
        <a href="/plantCare">PLANT CARE</a> <br />
        <a href="/aboutUs">ABOUT US</a> <br />
        <a href="/register">Sign Up</a> <br />
        <a href="/login">Sign In</a> <br />
      </Drawer>
    </Nav>
  );
}
