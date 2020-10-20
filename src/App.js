/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Account from './Screen/Account/Account';
import Splash from './Screen/Splash/Splash';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import Register from './Screen/Account/Register/Register';


const Stack = createStackNavigator();


const App: () => React$Node = () => {
	return (
		<Provider store={store}>
			<StatusBar barStyle="dark-content" />
			<View style={styles.appContainer} >
				<NavigationContainer>
					<Stack.Navigator headerMode="none" initialRouteName='Splash' >
						<Stack.Screen name="Account" component={Account} />
						<Stack.Screen name="Register" component={Register} />
						<Stack.Screen name="Splash" component={Splash} />
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		</Provider>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
	}
});

export default App;
