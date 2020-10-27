import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setModalVisible, createPlayList } from '../../../redux/actions/Playlist';
import ModalAddPlayList from './Components/ModalAddPlayList';
import CustomIcon from '../../../Utils/CustomIcon';
import { loadSuggestTracks } from '../../../redux/actions/Track';


const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;


const styles = StyleSheet.create({
  playListContainer: {
    width: '100%',
    height: deviceHeight * 13 / 100,
    marginBottom: 10
  },
  playListContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  addPlayListButton: {
    backgroundColor: '#636363',
    height: deviceHeight * 10 / 100,
    width: deviceHeight * 10 / 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const PlayListElement = (props) => {

  const playlistChoosehandler = (key, playlistName) => {
    props.navigation.navigate('PlaylistDetails', {
      playlistId: key,
      playlistName: playlistName
    });
  }
  return (
    <View style={styles.playListContainer} >
      <TouchableOpacity onPress={() => playlistChoosehandler(props.playlistId, props.playlistName)} style={styles.playListContent} >
        <View style={styles.addPlayListButton}>
          <CustomIcon iconType='Entypo' name='folder-music' size={30} color='#ffffff' />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 15, fontWeight: '400', marginLeft: 10 }}>{props.playlistName}</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>của <Text>{props.userName}</Text></Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    console.log('modalVisible', this.props.playlist.modalVisible);
    return (
      <View style={{ flex: 1, padding: 12 }}>
        <View style={styles.playListContainer} >
          <TouchableOpacity onPress={() => this.props.setModalVisible(true)} style={styles.playListContent} >
            <View style={styles.addPlayListButton}>
              <CustomIcon iconType='Ionicons' name='add' size={30} color='#ffffff' />
            </View>
            <Text style={{ fontSize: 15, fontWeight: '400', marginLeft: 10 }}>Add more playlist ?</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.props.playlist.playlist}
          renderItem={(item) => {
            console.log('item', item);
            return (
              <PlayListElement navigation={this.props.navigation} userName={this.props.userName} key={item.item._id} playlistId={item.item._id} playlistName={item.item.playlistName} />
            )
          }}
          keyExtractor={item => item._id.toString()}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.playlist,
    userName: state.user.user.userName
  }

}

function mapDispatchToProps(dispatch) {
  return {
    setModalVisible: (visible) => dispatch(setModalVisible(visible)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
