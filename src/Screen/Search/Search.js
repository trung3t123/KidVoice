import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Header from '../Components/Header/Header';
import {Searchbar} from 'react-native-paper';
import CategoryFilter from './components/CategoryFilter';
import BookElement from './components/BookElement';
import TrackElement from './components/TrackElement';
import Axios from 'axios';
import URL from '../../Utils/constant/ConstURL';
import RNFetchBlob from 'rn-fetch-blob';
let dirs = RNFetchBlob.fs.dirs;

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  searchBarStyle: {
    paddingHorizontal: 9,
    borderRadius: 9,
  },
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackData: [],
      bookData: [],
      filterMode: 'track',
      pageTrack: 1,
      pageBook: 1,
      isLoadingData: false,
      refreshing: false,
    };
  }

  chooseFilter = (filterValue) => {
    this.setState({filterMode: filterValue});
  };

  componentDidMount() {
    this.getTrackData();
    this.getBookData();
  }

  renderFooterComponent = (isLoadingData) => (
    <View>
      {isLoadingData ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <View />
      )}
    </View>
  );

  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  onMomentumScrollEndHandler = (nativeEvent, getDataAction) => {
    if (this.isCloseToBottom(nativeEvent)) {
      getDataAction;
    }
  };

  getTrackData = async () => {
    const {pageTrack, trackData} = this.state;
    this.setState({isLoadingData: true});
    if (pageTrack === 1) {
      Axios.get(URL.SERVER + ':5035/tracks/allTracks/' + pageTrack).then(
        (res) => {
          this.setState({
            trackData: res.data.tracks,
            pageTrack: pageTrack + 1,
            isLoadingData: false,
          });
        },
      );
    } else {
      Axios.get(URL.SERVER + ':5035/tracks/allTracks/' + pageTrack).then(
        (res) => {
          this.setState({
            trackData: [...trackData, ...res.data.tracks],
            pageTrack: pageTrack + 1,
            isLoadingData: false,
          });
        },
      );
    }
  };

  getBookData = () => {
    const {pageBook, bookData} = this.state;
    this.setState({isLoadingData: true});
    if (pageBook === 1) {
      Axios.get(URL.SERVER + ':5035/books/getAllBook/' + pageBook).then(
        (res) => {
          this.setState({
            bookData: res.data.books,
            pageBook: pageBook + 1,
            isLoadingData: false,
          });
        },
      );
    } else {
      Axios.get(URL.SERVER + ':5035/books/getAllBook/' + pageBook).then(
        (res) => {
          this.setState({
            bookData: [...bookData, ...res.data.books],
            pageTrack: pageBook + 1,
            isLoadingData: false,
          });
        },
      );
    }
  };

  searchData = async (text) => {
    this.setState({isLoadingData: true, pageTrack: 1});

    if (text.length <= 0) {
      this.getBookData();
      this.getTrackData();
    } else {
      const {filterMode} = this.state;
      if (filterMode === 'track') {
        Axios.get(URL.SERVER + ':5035/tracks/searchTrack/' + text).then(
          (res) => {
            this.setState({
              trackData: res.data.track,
              pageTrack: 1,
              isLoadingData: false,
            });
          },
        );
      } else {
        Axios.get(URL.SERVER + ':5035/books/searchBook/' + text).then((res) => {
          this.setState({
            bookData: res.data.books,
            pageBook: 1,
            isLoadingData: false,
          });
        });
      }
    }
  };

  render() {
    const {trackData, bookData, filterMode, isLoadingData} = this.state;
    return (
      <View style={{flex: 1, paddingBottom: (deviceHeight * 9) / 100}}>
        <Header headerText="Tìm kiếm" navigation={this.props.navigation} />

        <View style={{flex: 1, marginHorizontal: 20}}>
          <Searchbar
            style={styles.searchBarStyle}
            onChangeText={(text) => {
              this.searchData(text);
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <CategoryFilter
              isActive={filterMode === 'track' ? true : false}
              chooseFilter={() => this.chooseFilter('track')}
              filterName="Audio Book"
            />
            <CategoryFilter
              isActive={filterMode === 'track' ? false : true}
              chooseFilter={() => this.chooseFilter('book')}
              filterName="Sách"
            />
          </View>
          {filterMode === 'track' ? (
            <FlatList
              onMomentumScrollEnd={({nativeEvent}) =>
                this.onMomentumScrollEndHandler(
                  nativeEvent,
                  this.getTrackData(),
                )
              }
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={trackData}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => this.getTrackData()}
                />
              }
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
              ListFooterComponent={this.renderFooterComponent(isLoadingData)}
              keyExtractor={(item) => item?._id?.toString()}
            />
          ) : (
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => this.getBookData()}
                />
              }
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              onMomentumScrollEnd={({nativeEvent}) =>
                this.onMomentumScrollEndHandler(nativeEvent, this.getBookData())
              }
              data={bookData}
              renderItem={({item}) => {
                return (
                  <BookElement
                    navigation={this.props.navigation}
                    book={item}
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
              ListFooterComponent={this.renderFooterComponent(isLoadingData)}
              keyExtractor={(item) => item?._id?.toString()}
            />
          )}
        </View>
      </View>
    );
  }
}

export default Search;
