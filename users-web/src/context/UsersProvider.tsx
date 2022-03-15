import { useReducer } from "react";
import { UsersReducer } from './UsersReducer';
import { UserContext } from './UsersContext';

const INITIAL_STATE = {
  isLoading: true,
  currentUser: null,
  users: [],
}

interface Props {
  children: JSX.Element | JSX.Element[]; 
}

export const UsersProvider = ({children}: Props) => {

  const [state, dispatch] = useReducer(UsersReducer, INITIAL_STATE);

  const getUsers = () => {

  }

  const getUserDetail = () => {

  }

  return (
    <UserContext.Provider value={{
      ...state,
      getUsers,
      getUserDetail
    }}>
      {children}
    </UserContext.Provider>
  )

}
