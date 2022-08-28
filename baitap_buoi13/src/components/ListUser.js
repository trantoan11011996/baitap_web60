import React, { useState } from "react";
import { Row, Col } from "antd";
export default function ListUser({ item }) {
  return (
    <div>
      <Row>
        <Col>Name : </Col>
        <Col>{item.name}</Col>
      </Row>
      <Row>
        <Col>Age : </Col>
        <Col>{item.age}</Col>
      </Row>
      <Row>
        <Col>Gender : </Col>
        <Col>{item.gender}</Col>
      </Row>
      <Row>
        <Col>Address : </Col>
        <Col>{item.address}</Col>
      </Row>
      <Row>
        <Col>Phone : </Col>
        <Col>{item.phone}</Col>
      </Row>
      <Row>
        <Col>Description : </Col>
        <Col>{item.description}</Col>
      </Row>
    </div>
  );
}
