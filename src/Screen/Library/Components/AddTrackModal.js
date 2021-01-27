import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {
  addTrackToPlaylist,
  setAddTrackVisible,
} from '../../../redux/actions/Track';
import CustomIcon from '../../../Utils/CustomIcon';
import {Searchbar} from 'react-native-paper';
import Axios from 'axios';
import URL from '../../../Utils/constant/ConstURL';

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

function Track(props) {
  const [addTrackStatus, setAddTrackStatus] = useState(true);
  const dispatch = useDispatch();
  const addTrack = (trackId, playlistId) => {
    setAddTrackStatus(false);
    dispatch(addTrackToPlaylist(trackId, playlistId));
  };
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
          <CustomIcon
            iconType="FontAwesome"
            name="music"
            size={25}
            color="#ffffff"
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

class AddTrackModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackData: [],
      page: 1,
      isLoadingData: false,
      refreshing: false,
    };
  }

  getTrackData = () => {
    const {page, trackData} = this.state;
    this.setState({isLoadingData: true});
    if (page === 1) {
      Axios.get(URL.SERVER + ':5035/tracks/allTracks/' + page).then((res) => {
        this.setState({
          trackData: res.data.tracks,
          page: page + 1,
          isLoadingData: false,
        });
      });
    } else {
      Axios.get(URL.SERVER + ':5035/tracks/allTracks/' + page).then((res) => {
        this.setState({
          trackData: [...trackData, ...res.data.tracks],
          page: page + 1,
          isLoadingData: false,
        });
      });
    }
  };

  componentDidMount = () => {
    this.getTrackData();
  };

  searchData = async (text) => {
    this.setState({isLoadingData: true, page: 1});

    if (text.length <= 0) {
      this.getTrackData();
    } else {
      Axios.get(URL.SERVER + ':5035/tracks/searchTrack/' + text).then((res) => {
        this.setState({
          trackData: res.data.track,
          page: 1,
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
    const {trackData, isLoadingData} = this.state;
    return (
      <View style={styles.modalContainer}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => this.props.setAddTrackVisible(false)}
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
              data={trackData}
              renderItem={({item}) => (
                <Track
                  key={item._id}
                  playlistId={this.props.playlistId}
                  trackId={item._id}
                  trackName={item.title}
                  artist={item.artist}
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
    suggestedTracks: state.track.suggestedTracks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAddTrackVisible: (visible) => dispatch(setAddTrackVisible(visible)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTrackModal);
