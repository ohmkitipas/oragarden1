import React from 'react';
import bn1 from '../../picture/New folder/bn1.jpg';
import bn2 from '../../picture/New folder/bn2.jpg';
import bn3 from '../../picture/New folder/bn3.jpg';
import bn4 from '../../picture/New folder/bn4.jpg';
import bn5 from '../../picture/New folder/bn5.jpg';
import '../../App.css';
import { Layout, Carousel, Row, Col } from 'antd';
import NavBar from '../NavBar';
import FooterBar from '../Footer'
const {  Content, Footer } = Layout;

export default function index() {
    return (
    <Layout>
        <div className="sticky">
          <NavBar />
        </div>   
      

      <Content>
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
             
        
    </Content>

      <Footer className ="Footer">
           <FooterBar/>
      </Footer>
     </Layout>
    );
}
