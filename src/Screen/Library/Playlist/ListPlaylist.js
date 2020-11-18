import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import {
  createPlayList,
  setModalVisible,
  getAllUserPlaylist,
} from '../../../redux/actions/Playlist';
import Modal from 'react-native-modal';
import PlayList from './PlayList';
import ModalAddPlayList from './Components/ModalAddPlayList';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  addPlayListButton: {
    marginTop: 30,
    width: '70%',
    height: (deviceHeight * 10) / 100,
    backgroundColor: '#636363',
    borderRadius: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
});

class ListPlaylist extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  createPlayList() {
    this.props.setModalVisible(false);
    this.props.createPlayList(this.state.playlistName);
  }

  openModal() {
    this.props.setModalVisible(true);
  }

  componentDidMount = () => {
    this.props.getAllUserPlaylist(this.props.userId);
  };

  render() {
    console.log('navigation', this.props.navigation);
    if (this.props.playlist.playlist.length == 0) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>
            Tạo playlist đầu tiên của bạn
          </Text>
          <Text style={{fontSize: 15, fontWeight: '500'}}>
            hãy để chúng tôi giúp bạn ?
          </Text>
          <TouchableOpacity
            style={styles.addPlayListButton}
            onPress={() => this.openModal()}>
            <Text style={{color: '#ffffff', fontSize: 20, fontWeight: '500'}}>
              Tạo playlist
            </Text>
          </TouchableOpacity>
          <Modal isVisible={this.props.playlist.modalVisible}>
            <ModalAddPlayList />
          </Modal>
        </View>
      );
    } else
      return (
        <View style={{flex: 1}}>
          <PlayList navigation={this.props.navigation} />
          <Modal
            onSwipeComplete={() => dispatch(setAddTrackVisible(false))}
            swipeDirection="down"
            isVisible={this.props.playlist.modalVisible}
            useNativeDriver={true}
            animationInTiming={500}>
            <ModalAddPlayList />
          </Modal>
        </View>
      );
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.playlist,
    userId: state.user.user._id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setModalVisible: (visible) => dispatch(setModalVisible(visible)),
    createPlayList: (playlistName) => dispatch(createPlayList(playlistName)),
    getAllUserPlaylist: (userId) => dispatch(getAllUserPlaylist(userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPlaylist);
