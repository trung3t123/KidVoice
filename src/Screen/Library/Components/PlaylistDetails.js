import React, {useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadTracklist, setAddTrackVisible} from '../../../redux/actions/Track';
import CustomIcon from '../../../Utils/CustomIcon';
import ListTrack from './ListTrack';
import Modal from 'react-native-modal';
import AddTrackModal from './AddTrackModal';
import TrackPlayer from 'react-native-track-player';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  albumImage: {
    width: (deviceWidth * 70) / 100,
    height: (deviceHeight * 40) / 100,
    backgroundColor: 'rgba(102, 102, 102,1)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  playlistImageContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  playlistInfo: {
    paddingLeft: 10,
    marginBottom: 10,
  },
  playlistName: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 5,
  },
  playPlaylistButton: {
    position: 'absolute',
    right: 10,
  },
});

const PLaylistDetails = (props) => {
  const {playlistId, playlistName} = props.route.params;
  const dispatch = useDispatch();
  const getTracklist = (playlistId) => {
    dispatch(loadTracklist(playlistId));
  };

  const addTrackVisible = useSelector((state) => state.track.addTrackVisible);
  const trackList = useSelector((state) => state.track.trackList);
  const userName = useSelector((state) => state.user.user.userName);

  async function playAll() {
    let playlistReady = [];
    trackList.forEach((track) => {
      playlistReady.push({
        id: track._id,
        url: 'http://192.168.88.121:5035/tracks/openTrack/' + track._id,
        title: track.title,
        artist: track.artist,
        duration: track.duration,
      });
    });
    await TrackPlayer.reset();
    await TrackPlayer.add(playlistReady)
      .then(async () => {
        console.log('hee');
        TrackPlayer.play();
      })
      .catch((error) => {
        console.log('error play', error);
      });
  }

  useEffect(() => {
    getTracklist(playlistId);
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <TouchableOpacity
        style={{position: 'absolute', left: 10}}
        onPress={() => props.navigation.goBack()}>
        <CustomIcon
          iconType="AntDesign"
          name="left"
          size={20}
          color="#9d9d9d"
        />
      </TouchableOpacity>

      <View style={styles.playlistImageContainer}>
        <View style={styles.albumImage}>
          <CustomIcon
            iconType="Entypo"
            name="folder-music"
            size={90}
            color="#ffffff"
          />
        </View>
      </View>

      <View style={styles.playlistInfo}>
        <Text style={styles.playlistName}>{playlistName}</Text>
        <View style={{flexDirection: 'row'}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <CustomIcon
                iconType="EvilIcons"
                name="user"
                size={25}
                color="#000000"
              />
              <Text>{userName}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{marginRight: 10}}>
                <CustomIcon
                  iconType="AntDesign"
                  name="download"
                  size={25}
                  color="#636363"
                />
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight: 10}}>
                <CustomIcon
                  iconType="Entypo"
                  name="share"
                  size={25}
                  color="#636363"
                />
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight: 10}}>
                <CustomIcon
                  iconType="MaterialIcons"
                  name="more-horiz"
                  size={25}
                  color="#636363"
                />
              </TouchableOpacity>
            </View>
          </View>
          {trackList.length != 0 ? (
            <TouchableOpacity
              onPress={() => playAll()}
              style={styles.playPlaylistButton}>
              <CustomIcon
                iconType="AntDesign"
                name="play"
                size={60}
                color="#00f040"
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <View>
        <ListTrack playlistId={playlistId} trackList={trackList} />
      </View>
      <Modal
        onSwipeComplete={() => dispatch(setAddTrackVisible(false))}
        isVisible={addTrackVisible}
        useNativeDriver={true}
        animationInTiming={500}>
        <AddTrackModal playlistId={playlistId} />
      </Modal>
    </ScrollView>
  );
};

export default PLaylistDetails;
