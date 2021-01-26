import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import URL from '../../../Utils/constant/ConstURL';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  bookElementContainer: {
    width: deviceWidth / 2.5,
    marginRight: 20,
    padding: 10,
    height: '100%',
    backgroundColor: '#6e7401',
    borderRadius: 5,
  },
  bookElementContent: {
    flex: 1,
    padding: 10,
  },
});

class TrackElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {trackName, trackImage, trackArtist} = this.props;

    return (
      <View style={styles.bookElementContainer}>
        <View style={styles.bookElementContent}>
          <Image
            style={{
              resizeMode: 'contain',
              height: '100%',
              width: '100%',
            }}
            source={{
              uri: URL.SERVER + ':5035/tracks/getTrackImage/' + trackImage,
            }}
          />
        </View>
        <Text numberOfLines={2} style={{marginTop: 10, color: 'white'}}>
          {trackName}
        </Text>
        <Text numberOfLines={2} style={{marginTop: 10, color: 'white'}}>
          {trackArtist}
        </Text>
      </View>
    );
  }
}

export default TrackElement;
