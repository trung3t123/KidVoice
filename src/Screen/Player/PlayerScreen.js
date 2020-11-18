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
import TrackPlayer, {getTrack} from 'react-native-track-player';
import CustomIcon from '../../Utils/CustomIcon';
import IMAGE from '../../Utils/ImageConst';
import Player from './Player';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;
const PlayerScreen = ({title, artist, duration, pauseTrack, playing, setPlayerVisible}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
            onPress={() => setPlayerVisible()}>
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
            source={IMAGE.bohemian_rhapsody}
          />
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: '500', color: 'white'}}>
            {title}
          </Text>
          <Text style={{fontSize: 15, fontWeight: '400', color: 'white'}}>
            {artist}
          </Text>
          <Text style={{fontSize: 15, fontWeight: '400', color: 'white'}}>
            {duration}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            height: (deviceHeight * 5) / 100,
          }}>
          <Player pauseTrack={pauseTrack} playing={playing} duration={duration} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlayerScreen;
