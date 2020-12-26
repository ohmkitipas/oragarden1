import React from "react";
import { Card } from "antd";
import Text from "antd/lib/typography/Text";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { products } = props;

  return (
    <div key={products.id} className="card">
      <Link to={`/products/${products.id}`}>
        <Card hoverable
        style={{ width:250 }}
        cover={<img src={products.img1} alt={products.name}/>}
        >
          <h2 style={{ height: "120px" }}> {products.name}</h2>
          <p style={{ height: "250px", overflowY: "scroll" }}>
            {products.description}
          </p>
          <Text code> {products.price} bath</Text>
        </Card>
      </Link>
    </div>
  );
}
