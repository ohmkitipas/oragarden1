import React, { useEffect } from "react";
import { listProducts } from "../../action/productAction";
import LoadingBox from "../LoadingBox";
import NavBar from "../NavBar";
import ProductCard from "../ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";

export default function Product(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          { error }
        ) : (
          <div>
            <Row type='flex-box' justify ="center">
              <Col span = {14}>

            {products.map((products) => (
              <ProductCard key={products.id} products={products} />
              ))}
              </Col>
              </Row>
          </div>
        )}
      </div>
    </div>
  );
}
