import React from 'react'
import { Text, View } from 'react-native';
import { UsersDetail } from '../interfaces/usersInterface';

interface Props {
  user: UsersDetail;
}

export const ListUsers = ({user}: Props) => {
  return (
    <View>
     <Text>
        {user.first_name}
      </Text>
    </View>
  );
};
