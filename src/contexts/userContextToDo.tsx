import { createContext, useState, ReactNode } from "react";

export type UserToDo = {
    name: string,
    email: string,
    username: string,
    todo?: ToDo[],
}

export type ToDo = {
    todo: string,
    finished?: boolean,
    makeDone: () => void,
    addToDo: () => void,
}

type ToDoData = {
    user: UserToDo,
    todo?: ToDo[],
    makeDone: () => void,
    addToDo: (todo: ToDo) => void,
    SelectUser: (user: UserToDo) => void,
}

export const UserToDoContext = createContext({} as ToDoData);

type UserContextProviderProps = {
    children: ReactNode;
}

export function UserContextProvider ({children} : UserContextProviderProps){
    
    const [user, setUser] = useState({} as UserToDo);
    const [toDo, setToDo] = useState([] as any);
    const [done, setDone] = useState(false);

    function addToDo(todo: ToDo){
       setToDo([todo]);
       setDone(false);
    }
    function makeDone(){
        if(done===false){
            setDone(true);
        }else{
            setDone(false);
        }
    }
    function SelectUser(user: UserToDo){
        setUser(user);
    }

    return(
        <UserToDoContext.Provider value={
            {
               user, SelectUser, addToDo, makeDone,
            } 
        }>
            {children}
        </UserToDoContext.Provider>
    )
}