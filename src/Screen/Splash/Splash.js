import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TrackPlayer from 'react-native-track-player';
import CustomIcon from '../../Utils/CustomIcon';
import Download from '../Download/Download';
import HomeScreen from '../HomeScreen/HomeScreen';
import Library from '../Library/Library';
import News from '../News/News';
import Search from '../Search/Search';
import {connect} from 'react-redux';
import {setPlaying} from '../../redux/actions/Track';
import URL from '../../Utils/constant/ConstURL';
import IMAGE from '../../Utils/ImageConst';

const Tab = createMaterialBottomTabNavigator();
const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  mediaPLayer: {
    position: 'absolute',
    paddingHorizontal: 20,
    bottom: (deviceHeight * 9) / 100,
    height: (deviceHeight * 9) / 100,
    width: '100%',
    backgroundColor: '#636363',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dedede',
  },
  playListContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  playListContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Bạn Chưa chọn track nào hihi',
      artist: 'chọn track bất kì đi nhé',
      image: null,
      duration: '',
      playerVisible: false,
    };
  }

  componentDidMount = () => {
    TrackPlayer.setupPlayer({
      playBuffer: 0.5,
      minBuffer: 0.5 * 2,
      maxBuffer: 0.5 * 2,
      waitForBuffer: true,
    }).then(() => {
      console.log('MP setted up');
    });
    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.STATE_PLAYING,
        TrackPlayer.CAPABILITY_JUMP_FORWARD,
        TrackPlayer.CAPABILITY_JUMP_BACKWARD,
        TrackPlayer.CAPABILITY_PLAY_FROM_ID,
      ],
    });
    TrackPlayer.addEventListener('playback-state', async (data) => {
      console.log('[somebody] data', data.state);
      switch (data.state) {
        case 'playing': {
          return this.props.setPlayingTrue();
        }
        case 'paused': {
          return this.props.setPlayingFalse();
        }
        default:
          break;
      }
    });
    TrackPlayer.addEventListener('playback-track-changed', async (data) => {
      let trackId = await TrackPlayer.getCurrentTrack();
      TrackPlayer.getTrack(trackId).then((data) => {
        this.setState({
          title: data.title,
          image: data.artwork,
          artist: data.artist,
          duration: data.duration,
        });
      });
    });
  };

  previousTrack = async () => {
    TrackPlayer.skipToPrevious().then(() => {
      TrackPlayer.play();
    });
  };

  nextTrack = async () => {
    TrackPlayer.skipToNext().then(() => {
      TrackPlayer.play();
    });
  };

  playTrack = async () => {
    TrackPlayer.play();
  };

  pauseTrack = async () => {
    TrackPlayer.pause();
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Tab.Navigator
          barStyle={{
            backgroundColor: '#636363',
            height: (deviceHeight * 9) / 100,
            justifyContent: 'center',
          }}
          initialRouteName="HomeScreen">
          <Tab.Screen
            options={{
              tabBarLabel: 'Trang chủ',
              tabBarIcon: ({focused, tintColor = 'grey'}) =>
                focused ? (
                  <CustomIcon
                    iconType="FontAwesome"
                    name="home"
                    size={20}
                    color="#ffffff"
                  />
                ) : (
                  <CustomIcon
                    iconType="FontAwesome"
                    name="home"
                    size={25}
                    color="#c1c1c1"
                  />
                ),
            }}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'Thư viện',
              tabBarIcon: ({focused, tintColor = 'grey'}) =>
                focused ? (
                  <CustomIcon
                    iconType="Ionicons"
                    name="library"
                    size={20}
                    color="#ffffff"
                  />
                ) : (
                  <CustomIcon
                    iconType="Ionicons"
                    name="library"
                    size={25}
                    color="#c1c1c1"
                  />
                ),
            }}
            name="Library"
            component={Library}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'Tải về ',
              tabBarIcon: ({focused, tintColor = 'grey'}) =>
                focused ? (
                  <CustomIcon
                    iconType="Entypo"
                    name="download"
                    size={20}
                    color="#ffffff"
                  />
                ) : (
                  <CustomIcon
                    iconType="Entypo"
                    name="download"
                    size={25}
                    color="#c1c1c1"
                  />
                ),
            }}
            name="Download"
            component={Download}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'Tìm kiếm',
              tabBarIcon: ({focused, tintColor = 'grey'}) =>
                focused ? (
                  <CustomIcon
                    iconType="FontAwesome"
                    name="search"
                    size={20}
                    color="#ffffff"
                  />
                ) : (
                  <CustomIcon
                    iconType="FontAwesome"
                    name="search"
                    size={25}
                    color="#c1c1c1"
                  />
                ),
            }}
            name="Search"
            component={Search}
          />
        </Tab.Navigator>
        <View style={styles.mediaPLayer}>
          <View style={styles.playListContainer}>
            <TouchableOpacity
              onPress={() => {
                // this.setState({playerVisible: true});
                this.props.navigation.navigate('Player');
              }}
              style={styles.playListContent}>
              <Image
                style={{width: 50, height: '100%', resizeMode: 'contain'}}
                source={
                  this.state.image
                    ? {
                        uri:
                          URL.SERVER +
                          ':5035/tracks/getTrackImage/' +
                          this.state.image,
                      }
                    : IMAGE.appIcon
                }
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '400',
                    marginLeft: 10,
                    color: '#ffffff',
                  }}>
                  {this.state.title}
                </Text>
                <Text style={{fontSize: 10, marginLeft: 10, color: '#ffffff'}}>
                  {this.state.artist}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                right: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={this.previousTrack}>
                <CustomIcon
                  iconType="AntDesign"
                  name="stepbackward"
                  size={25}
                  color="#ffffff"
                />
              </TouchableOpacity>
              {this.props.playing ? (
                <TouchableOpacity onPress={this.pauseTrack}>
                  <CustomIcon
                    iconType="AntDesign"
                    name="pause"
                    size={30}
                    color="#ffffff"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={this.playTrack}>
                  <CustomIcon
                    iconType="Entypo"
                    name="controller-play"
                    size={30}
                    color="#ffffff"
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={this.nextTrack}>
                <CustomIcon
                  iconType="AntDesign"
                  name="stepforward"
                  size={25}
                  color="#ffffff"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    playing: state.track.playing,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPlayingTrue: () => dispatch({type: 'SET_PLAYING_TRUE'}),
    setPlayingFalse: () => dispatch({type: 'SET_PLAYING_FALSE'}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
