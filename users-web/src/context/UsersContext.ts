import { createContext } from 'react';
import { UsersDetail } from '../interfaces/usersInterface';

export interface UserContextProps {
  isLoding: boolean;
  users: UsersDetail[],
  currentUser: null
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);
