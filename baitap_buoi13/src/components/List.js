import { Form, List } from "antd";
import React, { useContext, useState } from "react";
import ListUser from "./ListUser";
import {Row,Col} from "antd"
import {notification} from 'antd'
import AuthContext, { data, getUsers } from "../person";

export default function ListRender() {
  
  const {dataUser,setDataUser} = useContext(AuthContext)
 
    const handleFIlter = (event)=>{
        const searchWord = event
    
        const newFilter = dataUser.filter((user)=>{
          return user.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        if(searchWord === ''){
          setDataUser(getUsers())
        }
        else{
          setDataUser(newFilter)
        }
    }
    const removeItem = (id) => {
        const removedData = dataUser.filter((item) => item.id !== id);
        setDataUser(removedData);
    
        notification['success']({
            message: 'Deleted this member successfully',
            duration: 3
        })
    }
  return (
    <div>
      <h1>List</h1>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <List>
            {dataUser.map((item) => {
              return (
                <div>
                <List.Item>
                  <ListUser item={item}></ListUser>
                  <button onClick={()=>removeItem(item.id)}>delete</button>
                </List.Item>
                </div>
              );
            })}
          </List>
        </Col>
        <Col span={6}>
            <input placeholder="search" onChange={(e)=>handleFIlter(e.target.value)}></input>
        </Col>
      </Row>
    </div>
  );
}
