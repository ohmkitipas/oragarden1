import React, {useState} from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import logoOra from "../../picture/logoOra.png";
import "../../App.css";
import { Col,  Drawer,  Menu, Row } from "antd";
import { MenuOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;

export default function NavBar2() {
    const [visible, setVisible] = useState(false);

    const showDrawer = (e) => {
        setVisible(true);
    };

    const onClose = (e) => {
        setVisible(false);
    };


    return (
        <nav className="menuBar">
            <div className="menuCon">
                <div className="leftMenu">
                    <LeftMenu />
                </div>
                <div className="rightMenu">
                    <RightMenu />
                </div>
            </div>
            <div className="logo">
                <img src={logoOra} alt="" />
            </div>

      
            <MenuOutlined className="barMenu" onClick={showDrawer}>
                <span className="barsBtn"></span>
            </MenuOutlined >
            <Drawer 
              title="ORAGARDEN"
              placement="left"
              closable={false}
              onClose={onClose}
              visible={visible}
              >
               <LeftMenu />
               <RightMenu />

            </Drawer>                    
        </nav>
        
    )
};

/*
<div className= "navBar">
            <Row justify="space-between">
                <Col xs={1} sm={1} md={1} lg={1} xl={12} xxl={10} >

                 <div className="leftNav">
                    <Menu mode="horizontal" className="leftTest" style={ 
                        
                    }>
                    <Menu.Item key="home"> Home </Menu.Item>
                    <SubMenu key="SubMenu" title="Shop PLant">
                        <Menu.ItemGroup title="Sort by Light">
                            <Menu.Item key="indirectLight"> <a href="/index">Plant for indirect light </a></Menu.Item>
                            <Menu.Item key="lowLight">  <a href="/index" > Plant for low light</a></Menu.Item>
                            <Menu.Item key="sunnyLight">  <a href="/profile" >Plant for sunny </a></Menu.Item>
                        </Menu.ItemGroup>

                        <Menu.ItemGroup title="Sort by Size" >
                          <Menu.Item key="largePlant"> <a href="/index">Large</a></Menu.Item>
                          <Menu.Item key="mediumPlant"> <a href="/index">Medium</a></Menu.Item>
                          <Menu.Item key="smallPlant"> <a href="/index">Small</a></Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>

                    <SubMenu key="SubPotMenu" title="Shop Pot">
                      <Menu.Item key="allPot"> <a href="/index"> All Pot </a></Menu.Item>
                      <Menu.Item key="6Pot"> <a href="/index"> 6" Pot</a></Menu.Item>
                      <Menu.Item key="8Pot"> <a href="/index"> 8" Pot</a></Menu.Item>
                      <Menu.Item key="9Pot"> <a href="/index"> 9" Pot</a></Menu.Item>
                      <Menu.Item key="10Pot"> <a href="/index"> 10" Pot</a></Menu.Item>
                      <Menu.Item key="12Pot"> <a href="/index"> 12" Pot</a></Menu.Item>
                      <Menu.Item key="15Pot"> <a href="/index"> 15" Pot</a></Menu.Item>
                      <Menu.Item key="17Pot"> <a href="/index"> 17" Pot</a></Menu.Item>
                    </SubMenu>

                    <Menu.Item key="bestseller">
                        Best Seller
                    </Menu.Item>
                    <Menu.Item key="about">
                        <a href="/about">About</a> 
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <a href="/contact">Contact</a>
                    </Menu.Item>
                    </Menu>
                  </div>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={12} xxl={12}>
                  <div className="imgLogoNav">
                      <img src={logoOra} alt="oragarden" height="100"/>
                  </div>
                </Col>
            </Row>
            <Row> 
            <MenuOutlined onClick={showDrawer}></MenuOutlined >
            <Drawer 
              title="ORAGARDEN"
              placement="left"
              closable={false}
              onClose={onClose}
              visible={visible}
              >


            </Drawer>
            </Row>
            
        </div>
*/



