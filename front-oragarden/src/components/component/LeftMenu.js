import React from 'react'
import "../../App.css";
import { Menu } from "antd";

const { SubMenu } = Menu;

function LeftMenu() {
    return (
        <div>
            <Menu mode="horizontal" className="leftTest" >
                    <Menu.Item key="home"> Home </Menu.Item>
                    <SubMenu key="SubMenu" title="Shop Plant">
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
    )
}

export default LeftMenu
