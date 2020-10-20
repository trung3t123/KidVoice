import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeScreen from '../HomeScreen/HomeScreen';
import Library from '../Library/Library';
import Search from '../Search/Search';
import Download from '../Download/Download';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CustomIcon from '../../Utils/CustomIcon';
import News from '../News/News';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialBottomTabNavigator();



class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }} >
				<Tab.Navigator
					
					barStyle={{ backgroundColor: '#636363' }} initialRouteName='HomeScreen'>
					<Tab.Screen
						options={{
							tabBarLabel: 'Trang chủ',
							tabBarIcon: ({ focused, tintColor = 'grey' }) => (
								focused ? <CustomIcon iconType='FontAwesome'
									name="home" size={20} color='#ffffff'
								/>
									:
									<CustomIcon iconType='FontAwesome'
										name="home" size={25} color='#c1c1c1'
									/>
							)
						}}
						name="HomeScreen" component={HomeScreen} />
					<Tab.Screen
						options={{
							tabBarLabel: 'Thư viện',
							tabBarIcon: ({ focused, tintColor = 'grey' }) => (
								focused ? <CustomIcon iconType='Ionicons'
									name="library" size={20} color='#ffffff'
								/>
									:
									<CustomIcon iconType='Ionicons'
										name="library" size={25} color='#c1c1c1'
									/>
							)
						}}
						name="Library" component={Library} />
					<Tab.Screen
						options={{
							tabBarLabel: 'Bản tin ',
							tabBarIcon: ({ focused, tintColor = 'grey' }) => (
								focused ? <CustomIcon iconType='Entypo'
									name="news" size={20} color='#ffffff'
								/>
									:
									<CustomIcon iconType='Entypo'
										name="news" size={25} color='#c1c1c1'
									/>
							)
						}}
						name="News" component={News} />

					<Tab.Screen
						options={{
							tabBarLabel: 'Tải về ',
							tabBarIcon: ({ focused, tintColor = 'grey' }) => (
								focused ? <CustomIcon iconType='Entypo'
									name="download" size={20} color='#ffffff'
								/>
									:
									<CustomIcon iconType='Entypo'
										name="download" size={25} color='#c1c1c1'
									/>
							)
						}}
						name="Download" component={Download} />
					<Tab.Screen
						options={{
							tabBarLabel: 'Tìm kiếm',
							tabBarIcon: ({ focused, tintColor = 'grey' }) => (
								focused ? <CustomIcon iconType='FontAwesome'
									name="search" size={20} color='#ffffff'
								/>
									:
									<CustomIcon iconType='FontAwesome'
										name="search" size={25} color='#c1c1c1'
									/>
							)
						}}
						name="Search" component={Search} />
				</Tab.Navigator>
			</SafeAreaView>
		);
	}
}

export default Splash;
