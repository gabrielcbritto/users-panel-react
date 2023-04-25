import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'

import axios from "axios";
import ppl from "../../assets/ppl.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import {
  Container,
  H1,
  Image,
  ContainerSec,
  Button,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage(){
    history.push('/')
  }

  return (
    <Container>
      <Image alt="logo-img" src={ppl} />
      <ContainerSec>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              {user.name} - {user.age}
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trash-box" />
              </button>
            </User>
          ))}
        </ul>
        <Button onClick={goBackPage}>
          <img alt="arrow" src={Arrow} /> Voltar
        </Button>
      </ContainerSec>
    </Container>
  );
}

export default Users;
