import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
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
      page: 1,
    };
  }

  chooseFilter = (filterValue) => {
    this.setState({filterMode: filterValue});
  };

  componentDidMount() {
    this.getTrackData();
    this.getBookData();
  }

  getTrackData = () => {
    const {page} = this.state;

    Axios.get(URL.SERVER + ':5035/tracks/allTracks?page=' + page).then(
      (res) => {
        this.setState({trackData: res.data.tracks});
      },
    );
  };

  getBookData = () => {
    const {page} = this.state;

    Axios.get(URL.SERVER + ':5035/books/getAllBook?page=' + page).then(
      (res) => {
        this.setState({bookData: res.data.books});
      },
    );
  };
  // getTrackData = () => {
  //   let percent = 0;
  //   const ios = RNFetchBlob.ios;
  //   //   let arr = fileUri.split('/')
  //   // const dirs = RNFetchBlob.fs.dirs
  //   // filePath = `${dirs.DocumentDir}/${arr[arr.length - 1]}`
  //   RNFetchBlob.config({
  //     // add this option that makes response data to be stored as a file,
  //     // this is much more performant.
  //     fileCache: true,
  //   })
  //     .fetch(
  //       'GET',
  //       URL.SERVER + ':5035/tracks/getTrackImage/5fbe6fa64d4e4c0748e27711',
  //       {
  //         //some headers ..
  //       },
  //     )
  //     .progress({count: 10}, (received, total) => {
  //       console.log('progress', percent++);
  //     })
  //     .then((res) => {
  //       // the temp file path
  //       ios.openDocument(res.path());
  //       console.log('The file saved to ', res.path());
  //     });
  // };

  render() {
    const {trackData, bookData, filterMode} = this.state;
    return (
      <>
        <Header headerText="Tìm kiếm" navigation={this.props.navigation} />

        <View style={{flex: 1, marginHorizontal: 20}}>
          <Searchbar style={styles.searchBarStyle} />
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
              showsHorizontalScrollIndicator={false}
              data={trackData}
              renderItem={({item}) => (
                <TrackElement
                  trackName={item.title}
                  trackImage={
                    item.trackImage
                      ? item.trackImage
                      : '5fbe6fa64d4e4c0748e27711'
                  }
                  trackArtist={item.artist ? item.artist : 'NA'}
                />
              )}
              keyExtractor={(item) => item._id.toString()}
            />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={bookData}
              renderItem={({item}) => {
                console.log(item);
                return (
                  <BookElement
                    bookName={item.bookName}
                    bookImage={
                      item.bookImage
                        ? item.bookImage
                        : '5fbe6fa64d4e4c0748e27711'
                    }
                  />
                );
              }}
              keyExtractor={(item) => item._id.toString()}
            />
          )}
        </View>
      </>
    );
  }
}

export default Search;
