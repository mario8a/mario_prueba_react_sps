import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListUsers } from '../components/ListUsers';
import { useUsers } from '../hooks/useUsers';
import { useEffect } from 'react';

export const HomeScreen = () => {

  const { users, isLoading } = useUsers();
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    SplashScreen.hide();
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
      <View style={{marginTop: top + 20}}>
        <FlatList
          data={users}
          renderItem={({item}) => <ListUsers user={item}/>}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};
