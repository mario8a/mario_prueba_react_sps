import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

export const DetailScreen = ({ route, navigation }: Props) => {

  const user = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.avatarContainer}>
        <Image
            source={{uri: user.avatar}}
            style={{height: '100%', width: '100%', borderRadius: 60}}
          />
        </View>
        {/* Close button */}
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{user.first_name} {user.last_name}</Text>
          <Text style={styles.textEmail}>{user.email}</Text>
          <TouchableOpacity style={styles.btnMessage}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Send me a message
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Close button */}
      <View style={styles.backBtn}>
        <TouchableOpacity
          onPress={() => navigation.pop() }
        >
          <Icon
            color="black"
            name="arrow-back-outline"
            size={40}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6c6c6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 340,
    width: 340,
    backgroundColor: 'white',
    borderRadius: 21,
    elevation: 3,
  },
  avatarContainer: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    position: 'absolute',
    top: -50,
  },
  textContainer: {
    height: '90%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    padding: 10,
    alignSelf: 'center',
    fontSize: 30,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  textEmail: {
    fontSize: 15,
    lineHeight: 26,
  },
  btnMessage: {
    height: 35,
    width: 200,
    borderRadius: 40,
    backgroundColor: '#5458F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  backBtn: {
    position: 'absolute',
    elevation: 9,
    top: 30,
    left: 20,
    padding: 6,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});
