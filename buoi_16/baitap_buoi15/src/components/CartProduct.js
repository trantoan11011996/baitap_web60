import React, { useContext, useEffect, useState } from "react";
import {
  Badge,
  Button,
  Navbar,
  Container,
  Modal,
  ListGroup,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { BsFillCartCheckFill, BsHandIndexFill } from "react-icons/bs";
import { AuthContext } from "../data";

export default function CartProduct() {
  const [show, setShow] = useState(false);
  const {productInCart,inCreaseProduct,deCreaseProduct,deleteProductInCart} = useContext(AuthContext)


  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };
  let price = 0
  let total = 0;
  let totalPrice = 0
  for (let product of productInCart) {
      total = total + product.amount;
      price = product.price * product.amount
      totalPrice = totalPrice + price
  }
  return (
    <>
      <Navbar
        fixed="top"
        className="header"
        variant="light"
        bg="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            Simple Shopping app with ReatJs
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="light" onClick={showModal}>
                <Badge className="badge" pill bg="dark">
                  {total}
                </Badge>
                <BsFillCartCheckFill></BsFillCartCheckFill>
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {productInCart.map((product, index) => {
              return (
                <ListGroup.Item key={index}>
                  <Row className="cart-item">
                    <Col md={3} className="img-header">
                      <img
                        src={product.avatar}
                        className="img-food w-100"
                      ></img>
                    </Col>
                    <Col sm={6}>
                      <h3>{product.product}</h3>
                      <div>
                        <Badge bg="primary" className="me-4">
                          ${product.price}
                        </Badge>
                        <Badge bg="light" text="dark" className="me-4">
                          amount : {product.amount}
                        </Badge>
                      </div>
                      <Button className="mt-2" size="sm" onClick={()=>deleteProductInCart(product.id)}>
                        Cancel
                      </Button>
                    </Col>
                    <Col>
                      <Button variant="primary" size="sm" className="me-2" onClick={()=>deCreaseProduct(product.id)}>
                        -
                      </Button>
                      <Button variant="primary" size="sm" onClick={()=>inCreaseProduct(product.id)}>
                        +
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <b className="text-danger mt-3">Total price : {totalPrice}</b>
        </Modal.Body>
      </Modal>
    </>
  );
}
