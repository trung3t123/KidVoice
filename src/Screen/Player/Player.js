import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {ProgressComponent} from 'react-native-track-player';
import timeCounter from '../../Utils/TimeCounter';
import Slider from '@react-native-community/slider';
import CustomIcon from '../../Utils/CustomIcon';
import TrackPlayer from 'react-native-track-player';
const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

export class Player extends ProgressComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
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

  render() {
    const time = timeCounter(this.state.position);

    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 30,
            backgroundColor: 'transparent',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>{time}</Text>
          {/* <Text>{this.state.duration}</Text> */}
          <Slider
            style={{width: '100%', height: 40}}
            value={this.state.sliderValue}
            minimumValue={0}
            step={0.01}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <View
            style={{
              width: '100%',
              height: (deviceHeight * 5) / 100,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              onPress={this.previousTrack}>
              <CustomIcon
                iconType="AntDesign"
                name="stepbackward"
                size={40}
                color="#ffffff"
              />
            </TouchableOpacity>
            {this.props.playing ? (
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={this.props.pauseTrack}>
                <CustomIcon
                  iconType="AntDesign"
                  name="pausecircle"
                  size={35}
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
                onPress={this.playTrack}>
                <CustomIcon
                  iconType="AntDesign"
                  name="play"
                  size={35}
                  color="#ffffff"
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              onPress={this.nextTrack}>
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
  }
}

export default Player;
