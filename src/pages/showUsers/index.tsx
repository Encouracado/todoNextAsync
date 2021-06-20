import React from 'react';
import { GetStaticProps } from "next";
import api from '../../services/api';
// import { Container } from './styles';

type user = {
    id: number,
    name: string,
    email: string,
    username: string
}

type users = {
    users: user[];
}

export default function showUsers({users}:users) {
  return (<h1>{users.map((user) => {
      return(
          <p key={user.id}>{user.name}</p>
      )
  })}</h1>);
}



export const getStaticProps = async () =>{
  const response = await api('/users', {
      params:{
          _limit: 2,
          _order: "desc",
      }
  })

  const data = response.data;

  const users = data.map((user: user)=>{
      return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
      }
  })

  return {
      props:{
          users,
      },
      revalidate: 60 * 60 // uma hora para cada atualização
  }
}