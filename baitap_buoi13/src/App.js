import logo from "./logo.svg";
import "./App.css";
import ManagerMember from "./components/ManagerMember";
import ListRender from "./components/List";

import AuthContext, { generateData, RemoveAllUser } from "./person";
import { getUsers } from "./person";
import { useState } from "react";
import { notification } from "antd";

generateData()
function App() {
  const [dataUser, setDataUser] = useState(getUsers());
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [description, setDecription] = useState("");
  const [phone, setPhone] = useState("");
  const [hobby, setHobby] = useState("");

  const handleCreateUser = (event) => {
    event.preventDefault();
    let newUser = {
      id: dataUser.length + 1,
      name: name,
      age: age,
      gender: gender,
      address: address,
      description: description,
      phone: phone,
    }
    const userData = ([...dataUser,newUser])
    setDataUser(userData)
    localStorage.setItem('users',JSON.stringify(userData))
  };


  const confirmDelete = () => {
    setDataUser([])
    RemoveAllUser()
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
      <AuthContext.Provider value={{ dataUser, setDataUser}}>
        {console.log('auth',dataUser)}
        <ManagerMember
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
          setName={setName}
          setAge={setAge}
          setGender={setGender}
          setAddress={setAddress}
          setDecription={setDecription}
          setPhone={setPhone}
          setHobby={setHobby}
          handleCreateUser={handleCreateUser}
        />
        <ListRender />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
