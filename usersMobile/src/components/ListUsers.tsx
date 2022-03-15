import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { UsersDetail } from '../interfaces/usersInterface';

interface Props {
  user: UsersDetail;
}

export const ListUsers = ({user}: Props) => {

  const navigation = useNavigation();

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen', user)}
        style={styles.container}
        activeOpacity={0.8}
      >
        <Image
          source={{
            uri: user.avatar,
          }}
          style={styles.image}
        />
        <Text style={styles.userName}>
          {user.first_name}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  container: {
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 5,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 8,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});