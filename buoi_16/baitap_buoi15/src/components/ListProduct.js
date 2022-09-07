import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../data";
import ProductItem from "./ProductItem";
import { List } from "antd";
import '../css/product.css'
export default function ListProduct() {
  const { data } = useContext(AuthContext);

  return (
    <div className="container-list">
        <List
          grid={{
            gutter : 16,
            column : 4
          }}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 8,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
             <ProductItem product={item}/>
            </List.Item>
          )}
        ></List>
    </div>
  );
}
