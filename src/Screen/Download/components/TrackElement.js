import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import URL from '../../../Utils/constant/ConstURL';
import CustomIcon from '../../../Utils/CustomIcon';
import TrackPlayer from 'react-native-track-player';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  bookElementContainer: {
    height: 70,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  imageContainer: {
    height: '100%',
    width: 70,
    padding: 10,
    backgroundColor: '#5d5d5d',
  },
});

class TrackElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailHeight: 0,
    };
  }

  shouldComponentUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return true;
  }

  playTrack = async () => {
    await TrackPlayer.reset();
    const {track} = this.props;
    const playlistReady = [];
    playlistReady.push({
      id: track._id,
      url: 'file://' + track.path,
      title: track.title,
      artist: track.artist,
      duration: track.duration,
      artwork: URL.SERVER + ':5035/tracks/getTrackImage/' + track.trackImage,
    });
    TrackPlayer.add(playlistReady).then(async () => {
      await TrackPlayer.play();
    });
    this.props.navigation.navigate('Player');
  };

  render() {
    const {trackName, trackImage, trackArtist} = this.props;
    const {detailHeight} = this.state;

    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({detailHeight: 50})}
          style={styles.bookElementContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={{
                resizeMode: 'contain',
                height: '100%',
                width: '100%',
              }}
              source={{
                uri: URL.SERVER + ':5035/tracks/getTrackImage/' + trackImage,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomIcon
                iconType="MaterialCommunityIcons"
                name="music-note"
                size={20}
                color="#5d5d5d"
              />
              <Text numberOfLines={2} style={{marginLeft: 5, fontSize: 15}}>
                {trackName}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomIcon
                iconType="MaterialCommunityIcons"
                name="account-music"
                size={20}
                color="#5d5d5d"
              />
              <Text numberOfLines={2} style={{marginLeft: 5, fontSize: 15}}>
                {trackArtist}
              </Text>
            </View>
          </View>
          <View style={{position: 'absolute', right: 0}}>
            <CustomIcon iconType="MaterialIcons" name="more-horiz" size={20} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: detailHeight,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.playTrack()}
              style={{paddingHorizontal: 20, borderRightWidth: 1}}>
              <CustomIcon
                iconType="FontAwesome"
                name="play"
                size={25}
                color="#5d5d5d"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.setState({detailHeight: 0})}
              style={{}}>
              <CustomIcon iconType="AntDesign" name="closecircle" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default TrackElement;
