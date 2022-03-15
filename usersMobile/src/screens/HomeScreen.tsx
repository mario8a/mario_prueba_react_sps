import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import usersAPI from '../api/usersAPI';
import { UsersDetail, UsersResponse } from '../interfaces/usersInterface';

export const HomeScreen = () => {

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

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }

  return (
    <View>
      <Text>{users[0].first_name}</Text>
    </View>
  );
};
