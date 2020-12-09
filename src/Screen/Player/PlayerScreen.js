import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomIcon from '../../Utils/CustomIcon';
import IMAGE from '../../Utils/ImageConst';
import Player from './Player';
import TrackPlayer, {getCurrentTrack} from 'react-native-track-player';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const PlayerScreen = ({navigation}) => {
  const [track, setTrack] = useState({
    title: 'Bạn chưa chọn bài gì nhé',
    artist: '',
    duration: '',
    artwork:
      'https://i2.wp.com/www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png?ssl=1',
  });

  async function getCurrentTrack() {
    let trackId = await TrackPlayer.getCurrentTrack();
    TrackPlayer.getTrack(trackId).then((data) => {
      setTrack({
        title: data.title,
        artist: data.artist,
        duration: data.duration,
        artwork: data.artwork,
      });
    });
  }

  useEffect(() => {
    // TrackPlayer.addEventListener('playback-track-changed', async (data) => {
    // });
    getCurrentTrack();
  }, [track]);

  return (
    <SafeAreaView style={{flex: 1, borderRadius: 10}}>
      <ScrollView
        style={{
          position: 'absolute',
          bottom: 0,
          height: deviceHeight,
          backgroundColor: 'grey',
          width: '100%',
          padding: 20,
        }}>
        <View
          style={{
            height: (deviceHeight * 5) / 100,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{position: 'absolute', left: 0}}
            onPress={() => navigation.goBack()}>
            <CustomIcon
              iconType="AntDesign"
              name="down"
              size={17}
              color="#ffffff"
            />
          </TouchableOpacity>
          <Text style={{color: 'white'}}> Playlist Name</Text>
        </View>
        <View
          style={{
            height: (deviceHeight * 50) / 100,
            width: '100%',
            marginBottom: (deviceHeight * 2) / 100,
          }}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
            }}
            source={{uri: track.artwork}}
          />
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: '500', color: 'white'}}>
            {track.title}
          </Text>
          <Text style={{fontSize: 15, fontWeight: '400', color: 'white'}}>
            {track.artist}
          </Text>
          {/* <Text style={{fontSize: 15, fontWeight: '400', color: 'white'}}>
            {track.duration}
          </Text> */}
        </View>
        <View
          style={{
            justifyContent: 'center',
            height: (deviceHeight * 15) / 100,
          }}>
          <Player />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlayerScreen;
