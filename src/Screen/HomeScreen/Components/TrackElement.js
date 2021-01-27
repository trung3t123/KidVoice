import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import URL from '../../../Utils/constant/ConstURL';
import TrackPlayer from 'react-native-track-player';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  bookElementContainer: {
    width: deviceWidth / 2.5,
    marginRight: 20,
    padding: 10,
    height: '100%',
    backgroundColor: '#7e7e7e',
    borderRadius: 5,
  },
  bookElementContent: {
    flex: 1,
    padding: 10,
  },
});

class TrackElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playTrack = async () => {
    await TrackPlayer.reset();
    const {track} = this.props;
    const playlistReady = [];
    playlistReady.push({
      id: track._id,
      url: URL.SERVER + ':5035/tracks/openTrack/' + track._id,
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

    return (
      <TouchableOpacity
        onPress={() => this.playTrack()}
        style={styles.bookElementContainer}>
        <View style={styles.bookElementContent}>
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
        <Text numberOfLines={2} style={{marginTop: 10, color: 'white'}}>
          {trackName}
        </Text>
        <Text numberOfLines={2} style={{marginTop: 10, color: 'white'}}>
          {trackArtist}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TrackElement;
