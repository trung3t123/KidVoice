/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar, StyleSheet, View, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './redux/store';
import Authorize from './Authorize';
import Register from './Screen/Account/Register/Register';
import Login from './Screen/Account/Login/Login';
import PlayerScreen from './Screen/Player/PlayerScreen';
import Modal from 'react-native-modal';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.appContainer}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName="Authorize">
            <Stack.Screen name="Authorize" component={Authorize} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
