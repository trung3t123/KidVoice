import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SongList from './SongList/SongList';
import NewList from './NewList/NewList';
import BookList from './BookList/BookList';

const Tab = createMaterialTopTabNavigator();

class Library extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header navigation={this.props.navigation} headerText="Thư viện" />
				<Tab.Navigator tabBarOptions={
					{
						activeTintColor: 'white',
						labelStyle: {
							color: 'black',
							fontWeight: 'bold'
						},
						showLabel: true,
						style: {
							backgroundColor: 'rgba(0,0,0,0)',
						},
						indicatorStyle: {
							backgroundColor: '#636363'
						}
					}}>
					<Tab.Screen
						options={{
							tabBarLabel: 'Bài hát',
						}}
						name="SongList" component={SongList}
					/>
					<Tab.Screen
						options={{
							tabBarLabel: 'Tin tức',
						}}
						name="NewList" component={NewList}
					/>
					<Tab.Screen
						options={{
							tabBarLabel: 'Sách truyện',
						}}
						name="BookList" component={BookList}
					/>
				</Tab.Navigator>

			</View >
		);
	}
}

export default Library;
