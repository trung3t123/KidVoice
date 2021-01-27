import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Button,
  AsyncStorage,
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import TrackPlayer from 'react-native-track-player';
import TrackElement from './components/TrackElement';
import Header from '../Components/Header/Header';
import BookElement from './components/BookElement';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  categoryChooseTab: {
    height: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      trackData: [],
      refreshing: false,
      isAudioChoosing: true,
    };
  }

  componentDidMount = () => {
    this.getTrackArray();
    this.getBookArray();
  };

  getTrackArray = () => {
    AsyncStorage.getItem('trackArray')
      .then((res) => JSON.parse(res))
      .then((data) => {
        console.log('data', data);
        this.setState({trackData: data});
      });
  };

  getBookArray = () => {
    AsyncStorage.getItem('bookArray')
      .then((res) => JSON.parse(res))
      .then((data) => {
        console.log('data', data);
        this.setState({bookData: data});
      });
  };

  playTracks = async () => {
    const {trackData} = this.state;
    const playlistReady = [];
    await TrackPlayer.reset();
    trackData.forEach((track) => {
      console.log('log', track);
      playlistReady.push({
        id: track._id,
        url: 'file://' + track.path,
        title: track.title,
        artist: track.artist,
        duration: track.duration,
        artwork: URL.SERVER + ':5035/tracks/getTrackImage/' + track.trackImage,
      });
    });
    await TrackPlayer.add(playlistReady).then(async () => {
      await TrackPlayer.play();
    });
  };

  render() {
    const {trackData, isAudioChoosing, bookData} = this.state;
    return (
      <View style={{flex: 1, paddingBottom: (deviceHeight * 9) / 100}}>
        <Header navigation={this.props.navigation} headerText="Download" />
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <View style={styles.categoryChooseTab}>
            <TouchableOpacity
              onPress={() => this.setState({isAudioChoosing: true})}>
              <Text
                style={[
                  styles.categoryText,
                  isAudioChoosing ? {color: '#667453'} : null,
                ]}>
                Audio books
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({isAudioChoosing: false})}>
              <Text
                style={[
                  styles.categoryText,
                  isAudioChoosing ? null : {color: '#667453'},
                ]}>
                Sách
              </Text>
            </TouchableOpacity>
          </View>
          {isAudioChoosing ? (
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => this.getTrackArray()}
                />
              }
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={trackData}
              renderItem={({item}) => (
                <TrackElement
                  track={item}
                  navigation={this.props.navigation}
                  trackName={item.title}
                  trackImage={
                    item.trackImage
                      ? item.trackImage
                      : '5fbe6fa64d4e4c0748e27711'
                  }
                  trackArtist={item.artist ? item.artist : 'NA'}
                />
              )}
              keyExtractor={(item) => item?._id?.toString()}
            />
          ) : (
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => this.getBookArray()}
                />
              }
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={bookData}
              renderItem={({item}) => {
                return (
                  <BookElement
                    book={item}
                    navigation={this.props.navigation}
                    bookId={item._id}
                    bookName={item.bookName}
                    bookImage={
                      item.bookImage
                        ? item.bookImage
                        : '5fbe6fa64d4e4c0748e27711'
                    }
                  />
                );
              }}
              keyExtractor={(item) => item?._id?.toString()}
            />
          )}
        </View>
      </View>
    );
  }
}

export default Download;
