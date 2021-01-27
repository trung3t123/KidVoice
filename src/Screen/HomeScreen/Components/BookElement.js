import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import URL from '../../../Utils/constant/ConstURL';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  bookElementContainer: {
    width: deviceWidth / 2.5,
    marginRight: 20,
    padding: 10,
    height: '100%',
    backgroundColor: '#aca9a9',
    borderRadius: 5,
  },
  bookElementContent: {
    flex: 1,
    padding: 10,
  },
});

class BookElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {bookName, bookImage, bookId} = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('BookPreview', {bookId: bookId})
        }
        style={styles.bookElementContainer}>
        <View style={styles.bookElementContent}>
          <Image
            style={{
              resizeMode: 'contain',
              height: '100%',
              width: '100%',
            }}
            source={{
              uri: URL.SERVER + ':5035/tracks/getTrackImage/' + bookImage,
            }}
          />
        </View>
        <Text numberOfLines={2} style={{marginTop: 10, color: 'white'}}>
          {bookName}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default BookElement;
