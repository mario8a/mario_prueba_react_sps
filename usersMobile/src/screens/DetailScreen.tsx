import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

export const DetailScreen = ({ route }: Props) => {

  const user = route.params;
  console.log(user);

  return (
    <View>
      <Text>Detail screen</Text>
    </View>
  );
};
