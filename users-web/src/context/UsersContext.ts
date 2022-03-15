import { createContext } from 'react';
import { UsersDetail } from '../interfaces/usersInterface';

export interface UserContextProps {
  isLoding: boolean;
  users: UsersDetail[],
  currentUser: UsersDetail,
  getUsers: () => Promise<void>
  getUserDetail: (id: number) => Promise<void>
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);
