import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Table } from "antd";
const columnsUser = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name.first",
    render : (name)=>`${name.title} ${name.first} ${name.last}`,
    sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a.name.first.localeCompare(b.name.first),
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    filters : [
        {
            text : "male",
            value : "male"
        },
        {
            text : "female",
            value : "female"
        }
    ],
    onFilter  : (value,record) => record.gender.indexOf(value) === 0
  },
];
const Tableuser = () => {
    const [userList,setUserList] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [pagination,setPagination] = useState({})
    const callApi = async ()=>{
         await axios.get('https://randomuser.me/api?results=100')
        .then((res)=>{
            return res.data
        })
        .then((data)=>{
            if(data){
                console.log(data.results)
                setUserList(data.results)
                setIsLoading(false)
            }else{
                setIsLoading(true)
            }
        })
    }
    useEffect(()=>{
        callApi()
    },[])
    const onChangeTable = (pagination,filters,sorter)=>{
        setIsLoading(true)
        console.log('pagi',pagination)
        console.log('filter',filters)
        console.log('sorter',sorter)
        callApi()
    }
  return (
    <>
   
        <Table
          dataSource={userList}
          columns = {columnsUser}
          loading = {isLoading}
          onChange = {onChangeTable}
          pagination = {pagination}
        ></Table>
  
    </>
  );
};
export default Tableuser;
