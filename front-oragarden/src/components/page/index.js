import React from "react";
import banner from "../../picture/banner4.jpg";
import potBanner from "../../picture/pot-acc.jpg";
import plantCard from "../../picture/plantCard1.jpg";
import groupCard from "../../picture/spcBdCard.jpg";
import "../../App.css";
import { Layout, Carousel, Row, Col, Button, Card, Typography } from "antd";
//import NavBar from '../NavBar';
import NavBar2 from "../component/NavBar2";
import FooterBar from "../Footer";
const { Content, Footer } = Layout;
const {Title } = Typography ;

export default function index(props) {
  return (
    <Layout>
      <div className="sticky">
        <NavBar2 />
      </div>

      <Content>
        <div>
          <div className="bg-white">
            <Row>
              <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
                <div className="containerMainPageLeft">
                  <h1>
                    Best Selling <br />
                    Indoor Plants
                  </h1>
                  <div className="">
                    <Button className="btn-Main">
                      {" "}
                      <a href="/product">
                        <p>Shop now</p>
                      </a>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={13} sm={13} md={13} lg={13} xl={13} xxl={13}>
                <div className="containerMainPageRight">
                  <img src={banner} alt="oragarden" />
                </div>
              </Col>
            </Row>

            <div className="container">
              <Row justify="center">
                <div className="gapMain">
                  <Col xs={24} sm={22} md={22} lg={11} xl={6} xxl={6}>
                    <div className="indexCard1">
                      <img src={plantCard} alt="plant" />
                    </div>
                  </Col>
                  <Col xs={24} sm={22} md={22} lg={11} xl={6} xxl={6}>
                    <div className="indexCard1">
                      <img src={groupCard} />
                    </div>
                  </Col>
                  <Col xs={24} sm={22} md={22} lg={22} xl={7} xxl={8}>
                    <div className="indexCard1">
                      <img src={potBanner} />
                    </div>
                  </Col>
                  <div></div>
                </div>
              </Row>
            </div>
          </div>
          <div className="gapMain2">
            <Row justify="center">
                <Col >
                  <div className="title1">
                      <h1>Best For Low Light<br/></h1> 
                      <h2> Check out here > </h2>
                      <br/>
                  </div>
                </Col>
            </Row>
          </div>
          <div className="gapMain2">
            <Row justify="center">
            <Col >
                  <div className="title1">
                      <h1>Best For Sunny Area<br/></h1> 
                      <h2> Check out here > </h2>
                      <br/>
                  </div>
                </Col>

            </Row>
          </div>
        </div>
      </Content>

      <Footer className="Footer">
        <FooterBar />
      </Footer>
    </Layout>
  );
}

//   xs={} sm={} md={} lg={} xl={} xxl={}

/*
<Row justify="center" className="bannerBg">

            <Col xs={22} sm={22} md={12} lg={12} xl={10} xxl={8} >
               <div className ="container">
                 
                 <Carousel effect="fade" autoplay className="carousel">
                     <img src={bn1} alt="banner1"/> 
                     <img src={bn2} alt="banner2"/> 
                     <img src={bn3} alt="banner3"/>  
                     <img src={bn4} alt="banner4"/> 
                     <img src={bn5} alt="banner5"/> 
                 </Carousel>             
               </div>
             </Col>
            
             <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12} className="container">
               <div className="textBoxCover">
                 <h1> We provide plants and gardening accessories delivering to your house.
                    The customer can have one-stop shopping of plants, pots,gardening accessories and etc.</h1>
               </div>
              
             </Col>
        </Row>
*/
