import { useReducer } from "react";
import { UsersReducer } from './UsersReducer';
import { UserContext } from './UsersContext';
import { UsersResponse, UsersDetail } from '../interfaces/usersInterface';
import usersAPI from '../apis/usersApi';


export interface UsersState {
  isLoading: boolean,
  currentUser: null,
  users: UsersDetail[]
}

const INITIAL_STATE: UsersState = {
  isLoading: true,
  currentUser: null,
  users: [],
}

interface Props {
  children: JSX.Element | JSX.Element[]; 
}

export const UsersProvider = ({children}: Props) => {

  const [state, dispatch] = useReducer(UsersReducer, INITIAL_STATE);

  const getUsers = async () => {
    const response = await usersAPI.get<UsersResponse>('/users');
    const { data } = response.data;
    dispatch({
      type: 'GET_USERS',
      payload: data
    });
  }

  const getUserDetail = async (id: number) => {
    const response = await usersAPI(`/users/${id}`)
    const { data } = response.data;
    dispatch({
      type: 'GET_USER_DETAIL',
      payload: data
    });
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
