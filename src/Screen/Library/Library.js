import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Header from '../Components/Header/Header';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Components/Splash';
import PlaylistDetails from './Components/PlaylistDetails';
import PlayList from './Playlist/PlayList';
import ListPlaylist from './Playlist/ListPlaylist';
const Stack = createStackNavigator();

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, paddingBottom: (deviceHeight * 9) / 100}}>
        <Header navigation={this.props.navigation} headerText="Thư viện" />
        <Stack.Navigator headerMode="none" initialRouteName="Splash">
          <Stack.Screen name="PlaylistDetails" component={PlaylistDetails} />
          <Stack.Screen name="Splash" component={Splash} />
          {/* <Stack.Screen name="Playlist" component={PlayList}/>
          <Stack.Screen name="ListPlaylist" component={ListPlaylist}/> */}
        </Stack.Navigator>
      </View>
    );
  }
}

export default Library;
