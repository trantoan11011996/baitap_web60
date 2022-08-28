import logo from './logo.svg';
import './App.css';
import ManagerMember from './components/ManagerMember';
import ListRender from './components/List';
import { dataUsers } from './person';
import { useState } from 'react';
import {notification} from 'antd'

function App() {

  const [dataUser, setDataUser] = useState(dataUsers)
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [description, setDecription] = useState('')
  const [phone,setPhone] = useState('')
  const [hobby,setHobby] = useState('')

  const handleCreateUser = (event) => {
    event.preventDefault();
    setDataUser((item) => [
      ...item,
      {
        id: dataUser.length + 1,
        name: name,
        age: age,
        gender: gender,
        address: address,
        description : description,
        phone : phone
      },
    ]);
  };


const confirmDelete = () => {
  setDataUser([]);

  notification["success"]({
    message: "Deleted all member successfully",
    duration: 3,
  });
};
const cancelDelete = () => {
  return;
};

  return (
    <div className="App">
      <ManagerMember 
      confirmDelete={confirmDelete} 
      cancelDelete={cancelDelete}
      setName = {setName}
      setAge = {setAge}
      setGender = {setGender}
      setAddress = {setAddress}
      setDecription = {setDecription}
      setPhone = {setPhone}
      setHobby = {setHobby}
      handleCreateUser = {handleCreateUser}/>
      <ListRender 
      data={dataUser}
      setDataUser = {setDataUser}/>
    </div>
  );
}

export default App;
