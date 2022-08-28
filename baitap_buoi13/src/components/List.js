import { Form, List } from "antd";
import React, { useState } from "react";
import ListUser from "./ListUser";
import {Row,Col} from "antd"
export default function ListRender({data,removeItem}) {
    const [filterData,setFilterData] = useState(data)
    
    const handleFIlter = (event)=>{
        const searchWord = event.target.value
        const newFilter = data.filter((user)=>{
          return user.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        if(searchWord === ''){
            setFilterData(data)
        }
        else{
            setFilterData(newFilter)
        }
    }
    
  return (
    <div>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <List>
            {filterData.map((item) => {
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
            <input placeholder="search" onChange={handleFIlter}></input>
        </Col>
      </Row>
    </div>
  );
}
