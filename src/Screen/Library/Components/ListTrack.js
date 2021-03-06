import React, {Component, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {connect, useDispatch} from 'react-redux';
import {
  addTrackToPlaylist,
  loadSuggestTracks,
  setAddTrackVisible,
} from '../../../redux/actions/Track';
import URL from '../../../Utils/constant/ConstURL';
import CustomIcon from '../../../Utils/CustomIcon';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  addPlayListButton: {
    marginTop: 10,
    width: '70%',
    height: (deviceHeight * 5) / 100,
    backgroundColor: '#636363',
    borderRadius: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPlayListButton2: {
    marginTop: 10,
    width: '40%',
    height: (deviceHeight * 3) / 100,
    backgroundColor: 'transparent',
    borderColor: '#636363',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: (deviceHeight * 10) / 100,
    marginBottom: 10,
  },
  trackImage: {
    height: (deviceHeight * 7) / 100,
    width: (deviceHeight * 7) / 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function Trackplay(props) {
  async function playAll(trackId, trackName, artist, duration, trackImage) {
    await TrackPlayer.reset();
    await TrackPlayer.add({
      id: trackId,
      url: URL.SERVER + ':5035/tracks/openTrack/' + trackId,
      title: trackName,
      artist: artist,
      duration: duration,
      artwork: URL.SERVER + ':5035/tracks/getTrackImage/' + trackImage,
      // album: 'while(1<2)',
      // genre: 'Progressive House, Electro House',
      // date: '2014-05-20T07:00:00+00:00', // RFC 3339
    }).then(async () => {
      await TrackPlayer.play();
    });
  }
  return (
    <View style={styles.trackStyle}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.trackImage}>
          <Image
            style={{
              resizeMode: 'contain',
              height: (deviceHeight * 7) / 100,
              width: (deviceHeight * 7) / 100,
            }}
            source={{
              uri:
                URL.SERVER + ':5035/tracks/getTrackImage/' + props.trackImage,
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 10}}>
            {props.trackName}
          </Text>
          <Text style={{fontSize: 10, marginLeft: 10}}>{props.artist}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          playAll(
            props.trackId,
            props.trackName,
            props.artist,
            props.duration,
            props.trackImage,
          )
        }
        style={{position: 'absolute', right: 0}}>
        <CustomIcon
          iconType="EvilIcons"
          name="play"
          size={30}
          color="#636363"
        />
      </TouchableOpacity>
    </View>
  );
}

function Track(props) {
  const [addTrackStatus, setAddTrackStatus] = useState(true);
  const dispatch = useDispatch();
  const addTrack = (trackId, playlistId) =>
    dispatch(addTrackToPlaylist(trackId, playlistId));

  const renderAddTrack = () => {
    if (addTrackStatus) {
      return (
        <TouchableOpacity
          onPress={() => addTrack(props.trackId, props.playlistId)}
          style={{position: 'absolute', right: 0}}>
          <CustomIcon
            iconType="MaterialIcons"
            name="playlist-add"
            size={30}
            color="#636363"
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <View
          onPress={() => addTrack(props.trackId, props.playlistId)}
          style={{position: 'absolute', right: 0}}>
          <CustomIcon
            iconType="Entypo"
            name="check"
            size={30}
            color="#69be40"
          />
        </View>
      );
    }
  };
  return (
    <View style={styles.trackStyle}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.trackImage}>
          <Image
            style={{
              resizeMode: 'contain',
              height: (deviceHeight * 7) / 100,
              width: (deviceHeight * 7) / 100,
            }}
            source={{
              uri:
                URL.SERVER + ':5035/tracks/getTrackImage/' + props.trackImage,
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 10}}>
            {props.trackName}
          </Text>
          <Text style={{fontSize: 10, marginLeft: 10}}>{props.artist}</Text>
        </View>
      </TouchableOpacity>
      {renderAddTrack()}
    </View>
  );
}

class ListTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.loadSuggestedTrack();
  };

  render() {
    if (this.props.trackList.length == 0) {
      return (
        <View style={{flex: 1, padding: 10}}>
          <View
            style={{
              alignSelf: 'center',
              width: (deviceWidth * 70) / 100,
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text
              style={{fontWeight: '500', fontSize: 15, textAlign: 'center'}}>
              Hãy tìm kiếm thêm một số bài hát cho playlist này
            </Text>
            <TouchableOpacity
              onPress={() => this.props.setAddTrackVisible(true)}
              style={styles.addPlayListButton}>
              <Text style={{color: '#ffffff', fontSize: 15, fontWeight: '500'}}>
                Thêm các bài hát
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{fontWeight: '700', fontSize: 20, marginBottom: 10}}>
              Bài hát gợi ý
            </Text>
            <View>
              {this.props.track.suggestedTracks.map((track) => {
                return (
                  <Track
                    key={track._id}
                    playlistId={this.props.playlistId}
                    trackId={track._id}
                    trackName={track.title}
                    artist={track.artist}
                    duration={track.duration}
                    trackImage={track.trackImage}
                  />
                );
              })}
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, padding: 10}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.setAddTrackVisible(true)}
              style={styles.addPlayListButton2}>
              <Text style={{fontSize: 12, fontWeight: '500'}}>
                Thêm các bài hát
              </Text>
            </TouchableOpacity>
          </View>
          {this.props.track.trackList.map((track) => {
            return (
              <Trackplay
                key={track._id}
                playlistId={this.props.playlistId}
                trackId={track._id}
                trackName={track.title}
                artist={track.artist}
                duration={track.duration}
                trackImage={track.trackImage}
              />
            );
          })}
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    track: state.track,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadSuggestedTrack: () => dispatch(loadSuggestTracks()),
    setAddTrackVisible: (isVisible) => dispatch(setAddTrackVisible(isVisible)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTrack);
