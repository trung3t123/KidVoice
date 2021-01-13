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
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import codePush from 'react-native-code-push';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Authorize from './Authorize';
import store from './redux/store';
import Register from './Screen/Account/Register/Register';

const Stack = createStackNavigator();

let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

const App: () => React$Node = () => {
  codePush.sync({
    updateDialog: true,
    installMode: codePush.InstallMode.IMMEDIATE,
  });

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <Stack.Navigator headerMode="none" initialRouteName="Authorize">
            <Stack.Screen name="Authorize" component={Authorize} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default codePush(codePushOptions)(App);
