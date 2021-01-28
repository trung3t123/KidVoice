import Axios from 'axios';
import React, {Component, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {connect, useDispatch} from 'react-redux';
import {addBookToUser} from '../../../../redux/actions/Book';
import URL from '../../../../Utils/constant/ConstURL';
import CustomIcon from '../../../../Utils/CustomIcon';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  modalContainer: {
    padding: 20,
    flex: 1,
    width: '100%',
    backgroundColor: '#fcfffd',
  },
  searchBarStyle: {
    paddingHorizontal: 9,
    borderRadius: 9,
  },
  listTrackContainer: {
    backgroundColor: '#d6d6d6',
    height: '100%',
    width: '100%',
    padding: 10,
    flex: 1,
  },
  trackStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: (deviceHeight * 10) / 100,
    marginBottom: 10,
  },
  trackImage: {
    backgroundColor: '#636363',
    height: (deviceHeight * 7) / 100,
    width: (deviceHeight * 7) / 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Book(props) {
  const [addTrackStatus, setAddTrackStatus] = useState(true);
  const dispatch = useDispatch();
  const addBook = (bookId, userId) => {
    setAddTrackStatus(false);
    dispatch(addBookToUser(bookId, userId));
  };
  const renderAddTrack = () => {
    if (addTrackStatus) {
      return (
        <TouchableOpacity
          onPress={() => addBook(props.bookId, props.userId)}
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
        <View style={{position: 'absolute', right: 0}}>
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
          <CustomIcon
            iconType="FontAwesome"
            name="music"
            size={25}
            color="#ffffff"
          />
        </View>
        <View>
          <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 10}}>
            {props.bookName}
          </Text>
        </View>
      </TouchableOpacity>
      {renderAddTrack()}
    </View>
  );
}

class ModalAddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      page: 1,
      isLoadingData: false,
      refreshing: false,
    };
  }

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

  componentDidMount = () => {
    this.getBookData();
  };

  searchData = async (text) => {
    this.setState({isLoadingData: true, page: 1});

    if (text.length <= 0) {
      this.getTrackData();
    } else {
      Axios.get(URL.SERVER + ':5035/books/searchBook/' + text).then((res) => {
        this.setState({
          bookData: res.data.books,
          pageBook: 1,
          isLoadingData: false,
        });
      });
    }
  };

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

  renderFooterComponent = (isLoadingData) => (
    <View>
      {isLoadingData ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <View />
      )}
    </View>
  );

  render() {
    const {bookData, isLoadingData} = this.state;
    return (
      <View style={styles.modalContainer}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.props.setModalVisible}
            style={{position: 'absolute', left: 0}}>
            <CustomIcon
              iconType="AntDesign"
              name="close"
              size={30}
              color="#a6a6a6"
            />
          </TouchableOpacity>
          <Text style={{fontWeight: '700', fontSize: 15}}> Thêm bài hát </Text>
        </View>

        <View style={{flex: 1, marginTop: 10, alignItems: 'center'}}>
          <Searchbar
            style={styles.searchBarStyle}
            onChangeText={(text) => {
              this.searchData(text);
            }}
          />
          <View style={styles.listTrackContainer}>
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => this.getTrackData()}
                />
              }
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              onMomentumScrollEnd={({nativeEvent}) =>
                this.onMomentumScrollEndHandler(
                  nativeEvent,
                  this.getTrackData(),
                )
              }
              data={bookData}
              renderItem={({item}) => (
                <Book
                  userId={this.props.userId}
                  key={item._id}
                  bookId={item._id}
                  bookName={item.bookName}
                />
              )}
              ListFooterComponent={this.renderFooterComponent(isLoadingData)}
              keyExtractor={(item) => item?._id?.toString()}
            />
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.user._id,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddBook);
