import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import TrackPlayer from 'react-native-track-player';
import CustomIcon from '../../Utils/CustomIcon';
import Download from '../Download/Download';
import HomeScreen from '../HomeScreen/HomeScreen';
import Library from '../Library/Library';
import News from '../News/News';
import Search from '../Search/Search';


const Tab = createMaterialBottomTabNavigator();
const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  mediaPLayer: {
    position: 'absolute',
    bottom: deviceHeight * 9 / 100,
    height: deviceHeight * 9 / 100,
    width: '100%',
    backgroundColor: '#636363',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dedede'
  },
  playListContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  playListContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
})


class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackName : '',
    };
  }

  async playSong() {
    console.log('log');
    TrackPlayer.play();
  }


  async pauseSong() {
    TrackPlayer.pause();
  }


   render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <Tab.Navigator

          barStyle={{ backgroundColor: '#636363', height: deviceHeight * 9 / 100, justifyContent: 'center' }} initialRouteName='HomeScreen'>
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
        <View style={styles.mediaPLayer} >
          <View style={styles.playListContainer} >
            <TouchableOpacity style={styles.playListContent} >
              <CustomIcon iconType='Entypo' name='folder-music' size={30} color='#ffffff' />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 15, fontWeight: '400', marginLeft: 10, color: "#ffffff" }}>name song</Text>
                <Text style={{ fontSize: 10, marginLeft: 10, color: "#ffffff" }}>artist</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.playSong}>
              <CustomIcon iconType='Entypo' name='controller-play' size={30} color='#ffffff' />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.pauseSong}>
              <CustomIcon iconType='AntDesign' name='pause' size={30} color='#ffffff' />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


export default Splash;
