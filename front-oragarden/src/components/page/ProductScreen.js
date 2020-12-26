import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../../action/productAction";
import Categorie from "../Categorie";
import Footer from "../Footer";
import LoadingBox from "../LoadingBox";
import NavBar from "../NavBar";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  

  useEffect(() => {
    dispatch(detailsProduct({}));
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <p> {error} </p>
        ) : (
          <Row type="flex" justify="center">
            <Col span={2} pull={1}>
              <Categorie />
            </Col>
            <Col span={20}>
              <Row>
                <Col xxl={8}>
                  <div>
                    <img src={product.img1} alt={product.name} />
                  </div>
                </Col>
                <Col xxl={4}>
                    <div>
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                        </ul>
                    </div>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </div>
      <Footer />
    </div>
  );
}
