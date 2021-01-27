import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TrackElement from './TrackElement';
import {connect} from 'react-redux';
import {getTrackListPage} from '../../../redux/actions/Track';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  booksContainer: {
    marginTop: 20,
    height: (deviceHeight * 30) / 100,
    paddingRight: (deviceWidth * 5) / 100,
    paddingLeft: (deviceWidth * 5) / 100,
    width: '100%',
  },
});

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getHomeTracks(1);
  };

  render() {
    const {tracks, navigation} = this.props;
    return (
      <View style={styles.booksContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{fontSize: 17}}>Audio books</Text>
          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={() => navigation.navigate('Search', {query: 'tracks'})}>
            <Text>Xem thêm...</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 6}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={tracks}
            renderItem={({item}) => {
              console.log(item);
              return (
                <TrackElement
                  navigation={navigation}
                  track={item}
                  trackId={item._id}
                  trackName={item.title}
                  trackImage={
                    item.trackImage
                      ? item.trackImage
                      : '5fbe6fa64d4e4c0748e27711'
                  }
                  trackArtist={item.artist ? item.artist : 'NA'}
                />
              );
            }}
            keyExtractor={(item) => item._id.toString()}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.track.homeTrackList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHomeTracks: () => dispatch(getTrackListPage()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Track);
