import React from "react";
import { Link } from "react-router-dom";
import plant from "../../picture/plantCard.jpg";


export default function ProductCard(props) {
  const { product } = props;

  return (
    <div className="productCard">
      <Link to={`/index`}>
        <img className="medium" src={plant} alt="productname" />
      </Link>
      <div className="cardBody">
        <Link to={`/index`}>
          <h2>productName</h2>
        </Link>
        <div className="price">price</div>
      </div>
    </div>
  );
}
