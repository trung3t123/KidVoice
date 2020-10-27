import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { addTrackToPlaylist, setAddTrackVisible } from '../../../redux/actions/Track';
import CustomIcon from '../../../Utils/CustomIcon';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  modalContainer: {
    padding: 20,
    height: deviceHeight * 70 / 100,
    width: "100%",
    backgroundColor: '#fcfffd',

  },
  listTrackContainer: {
    backgroundColor: '#d6d6d6',
    height: '100%',
    width: '100%',
    padding: 10,
  },
  trackStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: deviceHeight * 10 / 100,
    marginBottom: 10
  },
  trackImage: {
    backgroundColor: '#636363',
    height: deviceHeight * 7 / 100,
    width: deviceHeight * 7 / 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

function Track(props) {
  const dispatch = useDispatch();
  const addTrack = (trackId, playlistId) => dispatch(addTrackToPlaylist(trackId, playlistId));
  return (
    <View style={styles.trackStyle}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
        <View style={styles.trackImage}>
          <CustomIcon iconType='FontAwesome' name='music' size={25} color='#ffffff' />
        </View>
        <View>
          <Text style={{ fontSize: 15, fontWeight: '400', marginLeft: 10 }}>{props.trackName}</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>{props.artist}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTrack(props.trackId, props.playlistId)} style={{ position: 'absolute', right: 0 }}>
        <CustomIcon iconType='MaterialIcons' name="playlist-add" size={30} color="#636363" />
      </TouchableOpacity>
    </View>
  )
}

class AddTrackModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.modalContainer}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => this.props.setAddTrackVisible(false)}
            style={{ position: 'absolute', left: 0 }}>
            <CustomIcon iconType="AntDesign" name="close" size={30} color="#a6a6a6" />
          </TouchableOpacity>
          <Text style={{ fontWeight: '700', fontSize: 15 }}> AddTrackModal </Text>
        </View>
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <View style={styles.listTrackContainer}>
            {this.props.suggestedTracks.map((track) => {
              return (
                <Track key={track._id} playlistId={this.props.playlistId} trackId={track._id} trackName={track.title} artist={track.artist} />
              )
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    suggestedTracks: state.track.suggestedTracks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAddTrackVisible: (visible) => dispatch(setAddTrackVisible(visible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTrackModal);
