import { useEffect, useState } from 'react';
import usersAPI from '../api/usersAPI';
import { UsersResponse, UsersDetail } from '../interfaces/usersInterface';

export const useUsers = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<UsersDetail[]>([]);

  const getUsers = async () => {
    const response = await usersAPI.get<UsersResponse>('/users');
    const { data } = response.data;
    setUsers(data);

    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    isLoading,
  };
};
