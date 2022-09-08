import React, { useContext } from "react";
import { Card,Button } from "react-bootstrap";
import { AuthContext } from "../data";
export default function ProductItem({ product }) {
    const {addtoCart} = useContext(AuthContext)
  return (
    <Card>
      <Card.Img variant="top" src={product.avatar} />
      <Card.Body>
        <Card.Title>{product.product}</Card.Title>
        <Card.Text>
            {product.description}
        </Card.Text>
        <Card.Text>
            price : ${product.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>addtoCart(product)}>Buy Now!!!</Button>
      </Card.Body>
    </Card>
  );
}
