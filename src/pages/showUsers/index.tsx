import React, {useContext} from 'react';
import { useRouter } from 'next/router'
import { IoReturnDownBackOutline} from 'react-icons/io5'
import {UserToDoContext} from '../../contexts/userContextToDo'
import readingSide from '../../../public/ReadingSideDoodle.svg'
import api from '../../services/api';
import Link from "next/link";
import Image from 'next/image'
import styles from './index.module.scss'


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

export default function ShowUsers({users}:users) {
    const router = useRouter();
    const  {SelectUser} = useContext(UserToDoContext);
    function UserSelected(user: user, ){
        console.log(user)
        SelectUser(user);

    }
    function ReturnPage(){
        router.push('/')
      }
  return (
  <>
  <header className={styles.headerStyle}><button onClick={ReturnPage}><IoReturnDownBackOutline/> Back </button></header>

  <main className={styles.mainImg}>
      
  <div className={styles.title}>
  <strong>Welcome To Do UserList</strong>
  <Image src={readingSide} alt="reading" width={200} height={200} />
  </div>
  <div className={styles.Wrapper}>{users.map((user) => {
      return(
          <div key={user.id} className={styles.UserBox}>
           <Link href={`/user/${user.id}`} ><a onClick={() => { UserSelected(user) } }>{user.name}</a></Link>
          </div>
      )
  })}</div>
  
  </main>
  </>
  
  );
}



export const getStaticProps = async () =>{
  const response = await api('/users', {
      params:{
          _limit: 10,
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