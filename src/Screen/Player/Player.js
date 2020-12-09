import Slider from '@react-native-community/slider';
import React, {memo, useState} from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector} from 'react-redux';
import TrackPlayer from 'react-native-track-player';
import CustomIcon from '../../Utils/CustomIcon';
const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const Player = ({}) => {
  const playing = useSelector((state) => state.track.playing);
  const [sliderValue, setSliderValue] = useState(0);

  const previousTrack = async () => {
    TrackPlayer.skipToPrevious().then(() => {
      TrackPlayer.play();
    });
  };

  const nextTrack = async () => {
    TrackPlayer.skipToNext().then(() => {
      TrackPlayer.play();
    });
  };

  const playTrack = async () => {
    TrackPlayer.play();
  };

  const pauseTrack = async () => {
    TrackPlayer.pause();
  };

  const seekTrack = (value) => {
    // const {position} = state;
    // const {duration} = props;
    // const sliderPosition = position / duration;
    console.log('sliderPosition', value);
    // setState({
    //   sliderValue: sliderPosition,
    // });
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: 30,
          backgroundColor: 'transparent',
          alignItems: 'center',
        }}>
        {/* <Text style={{color: 'white'}}>ád</Text> */}
        {/* <Text>{state.duration}</Text> */}
        <Slider
          style={{width: '100%', height: 40}}
          value={sliderValue}
          onSlidingComplete={(value) => seekTrack(value)}
          minimumValue={0}
          step={0.01}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              onPress={() => previousTrack()}>
              <CustomIcon
                iconType="AntDesign"
                name="stepbackward"
                size={40}
                color="#ffffff"
              />
            </View>
          </TouchableWithoutFeedback>
          {playing ? (
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => pauseTrack()}>
              <CustomIcon
                iconType="AntDesign"
                name="pausecircle"
                size={40}
                color="#ffffff"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => playTrack()}>
              <CustomIcon
                iconType="AntDesign"
                name="play"
                size={40}
                color="#ffffff"
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => nextTrack()}>
            <CustomIcon
              iconType="AntDesign"
              name="stepforward"
              size={40}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(Player);
