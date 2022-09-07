import React, { useEffect, useState } from "react";
import { AuthContext, getProducts, initData } from "../data";
import ListProduct from "./ListProduct";
import "../css/product.css";
import { Container } from "react-bootstrap";
import CartProduct from "./CartProduct";
initData();
export default function ProductApp() {
  const [data, setData] = useState([]);
  const [productInCart, setProductInCart] = useState([]);
  
  useEffect(() => {
    const dataProducts = getProducts();
    setData(dataProducts);
  }, []);

  const addtoCart = (product) => {
    const newOrder = { ...product, amount: 1 };
    let productCart = [...productInCart];
    const findDuplicate = productCart.some(
      (item) => item.product === product.product
    );
    if (!findDuplicate) {
        console.log('!!!!!!!!')
      productCart = [...productInCart, newOrder];
      setProductInCart(productCart);
    } else {
      alert("this item has been add");
    }
  };
  
  const inCreaseProduct = (id)=>{
    const amountProduct = [...productInCart]
    const findItem  = amountProduct.find(item=>item.id === id)
    if(!findItem){
      return
    }else{
      findItem.amount = findItem.amount + 1
      setProductInCart(amountProduct)
    }
  }
  const deCreaseProduct = (id)=>{
    const amountProduct = [...productInCart]
    const findItem  = amountProduct.find(item=>item.id === id)
    if(!findItem){
      return
    }else{
      findItem.amount = findItem.amount - 1
      let noAmount = amountProduct.filter(item=>item.amount !== 0)
      setProductInCart(noAmount)
    }
  }
  const deleteProductInCart = (id)=>{
    const product = [...productInCart]
    const delProduct = product.filter(item=>item.id !== id)
    setProductInCart(delProduct)
  }
  return (
    <AuthContext.Provider value={{ data, addtoCart,productInCart,inCreaseProduct,deCreaseProduct,deleteProductInCart }}>
      <Container>
        <CartProduct/>
        <ListProduct />
      </Container>
    </AuthContext.Provider>
  );
}
