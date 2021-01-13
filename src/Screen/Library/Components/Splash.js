import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ListPlaylist from '../Playlist/ListPlaylist';
import News from '../News/News';
import BookList from '../BookList/BookList';

const Tab = createMaterialTopTabNavigator();

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'white',
            labelStyle: {
              color: 'black',
              fontWeight: 'bold',
            },
            showLabel: true,
            style: {
              backgroundColor: 'rgba(0,0,0,0)',
            },
            indicatorStyle: {
              backgroundColor: '#636363',
            },
          }}>
          <Tab.Screen
            options={{
              tabBarLabel: 'PLaylist',
            }}
            name="ListPlaylist"
            component={ListPlaylist}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'Sách truyện',
            }}
            name="BookList"
            component={BookList}
          />
        </Tab.Navigator>
      </View>
    );
  }
}
