import React from "react";
import { useState } from "react";
import { data } from "../person";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  List,
  notification,
  Radio,
  Row,
  Popconfirm,
} from "antd";
import TextArea from "antd/lib/input/TextArea";

export default function ManagerMember({confirmDelete,cancelDelete,setName,setAge,setGender,setAddress,setDecription,setPhone,setHobby,handleCreateUser}) {

  return (
    <>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <Form wrapperCol={{ span: 8 }}>
            <Col>
              <Popconfirm
                title="Are you sure to delete all member?"
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
                okText="Yes"
                cancelText="No"
              >
                <Button style={{ float: "right", marginRight: 20 }}>
                  Delete all
                </Button>
              </Popconfirm>
            </Col>

            <Form.Item
              label="Name"
              name="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Age"
              name="Age"
              rules={[{ required: true, message: "Please input your age!" }]}
            >
              <Input
                type="number"
                min={1}
                max={100}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="Phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <Input
                type="string"
                max={9}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Radio.Group onChange={(e) => setGender(e.target.value)}>
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female </Radio>
                <Radio value="Other">Other</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Address"
              name="Adress"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="Phone"
              rules={[{ required: true, message: "Please input your phone !" }]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item label="Hobby" name="Hobby" >
              <Checkbox value='soccer' onChange={(e)=>setHobby(e.target.value)}> Soccer </Checkbox>
              <Checkbox value='volleyball' onChange={(e)=>setHobby(e.target.value)}> Volleyball </Checkbox>
              <Checkbox value='baseball' onChange={(e)=>setHobby(e.target.value)}> Baseball </Checkbox>
              <Checkbox value='basketball' onChange={(e)=>setHobby(e.target.value)}> Basketball </Checkbox>
            </Form.Item>

            <Form.Item label="Self Introduction" name="Self Introduction">
              <TextArea rows={4} onChange={(e)=>setDecription(e.target.value)}/>
            </Form.Item>

            <Button onClick={handleCreateUser}> Add New Member</Button>
          </Form>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
}
