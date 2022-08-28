import { Form, List } from "antd";
import React, { useState } from "react";
import ListUser from "./ListUser";
import {Row,Col} from "antd"
import {notification} from 'antd'
import { dataUsers } from "../person";

export default function ListRender({setDataUser,data}) {
    // const handleFIlter = (event)=>{
    //     const searchWord = event
    
    //     const newFilter = data.filter((user)=>{
    //       return user.name.toLowerCase().includes(searchWord.toLowerCase())
    //     })
    //     if(searchWord === ''){
    //         setDataUser(data)
    //     }
    //     else{
    //         setDataUser(newFilter)
    //     }
    // }
    const searchMember = (keyword) => {
      const searchMember = data.filter((item) => item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
      setDataUser(searchMember)
  }
    const removeItem = (id) => {
        const removedData = data.filter((item) => item.id !== id);
        setDataUser(removedData);
    
        notification['success']({
            message: 'Deleted this member successfully',
            duration: 3
        })
    }
  return (
    <div>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <List>
            {data.map((item) => {
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
            <input placeholder="search" onChange={(e)=>searchMember(e.target.value)}></input>
        </Col>
      </Row>
    </div>
  );
}
