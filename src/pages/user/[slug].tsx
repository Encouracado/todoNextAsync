import {useContext, useState} from 'react'
import {UserToDoContext} from '../../contexts/userContextToDo'
import styles from './index.module.scss'
import { useForm, SubmitHandler } from "react-hook-form";
import {IoCheckmarkDoneCircleSharp, IoReturnDownBackOutline} from 'react-icons/io5'
import Image from 'next/image'
import { useRouter } from 'next/router'
import laying from '../../../public/LayingDoodle.svg'


type Inputs = {
    todo: string,
  };
export default function User (){
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [showInput, setShowInput] = useState(false);
    const [todo, setTodo] = useState<string[]>([]);
    const [index, setIndex] = useState(0);
    const {user} = useContext(UserToDoContext) 
    const [MakeDoneTodo, setMakeDoneTodo] = useState(false);

   function showInputTodo(){
       setShowInput(true)
   }

   const onSubmit : SubmitHandler<Inputs> = (data) =>{
    setTodo([...todo, data.todo])
    setIndex(index+1);
    setShowInput(false);
       
   }

   function completeTodo(){
       if(MakeDoneTodo===false){
           setMakeDoneTodo(true);
           alert('to do Done Congratulations!!')
       }else{
           setMakeDoneTodo(false);
       }
   }

   function ReturnPage(){
     router.push('/showUsers')
   }
   return(
       <>
      <header className={styles.headerStyle}><button onClick={ReturnPage}><IoReturnDownBackOutline/> Back </button></header>
      <main className={styles.mainEditingPage}>
       <div className={styles.title}>
         <strong>Editing my to do</strong>
         
         <Image src={laying} width={200} height={200} alt="laying" />
       </div>
       <div className={styles.Wrapper}>
          <div className={styles.UserBox}>
            Name: {user.name}
          </div>
          <div className={styles.UserBox}>
              Username: {user.username}
          </div>
          <div className={styles.UserBox}>
              Email: {user.email}
          </div>
          <ul>
          { 
                todo.map((todo, index) =>{
                        
                      if(MakeDoneTodo === false){

                        return(
                            <li key={index} className={styles.todoAdded}>{todo}
                            
                            <button onClick={completeTodo}><IoCheckmarkDoneCircleSharp /></button
                            ></li>
                            )

                      }
                      if(MakeDoneTodo===true){
                           return(
                            <li key={index} className={styles.todoAdded}>{todo}
                            
                            <button onClick={completeTodo} className={styles.done}><IoCheckmarkDoneCircleSharp /></button>
                            </li>
                            )
                      }
                        
                        
                   })     
            }
            </ul>
          {showInput ? (
          <div className={styles.addTodoSeparator}>
              <form onSubmit={handleSubmit(onSubmit)} >
              <input type="text" className={styles.BoxToDo} {...register("todo")}/>
              <button type="submit" >Add To Do</button>
              </form>
          </div>
          
          ) : ("")}
          <div className={styles.CreateToDo} onClick={showInputTodo}>
          <button >Create To Do</button>
          </div>

       </div>
       </main>
       </>
   )
}