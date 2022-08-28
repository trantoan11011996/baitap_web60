import logo from './logo.svg';
import './App.css';
import ManagerMember from './components/ManagerMember';
import ListRender from './components/List';
import { data } from './person';
import { useState } from 'react';
import {notification} from 'antd'

function App() {

  const [dataUser, setDataUser] = useState(data)
  const [people, setPeople] = useState(data);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [description, setDecription] = useState('')
  const [phone,setPhone] = useState('')
  const [hobby,setHobby] = useState('')
  console.log('hobby',hobby)
  const handleCreateUser = (event) => {
    event.preventDefault();
    setDataUser((item) => [
      ...item,
      {
        id: people.length + 1,
        name: name,
        age: age,
        gender: gender,
        address: address,
        description : description,
        phone : phone
      },
    ]);
  };
  const removeItem = (id) => {
    const removedData = dataUser.filter((item) => item.id !== id);
    setDataUser(removedData);

    notification['success']({
        message: 'Deleted this member successfully',
        duration: 3
    })
}

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
      removeItem={removeItem}/>
    </div>
  );
}

export default App;
