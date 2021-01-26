import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import URL from '../../../Utils/constant/ConstURL';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  bookElementContainer: {},
  bookElementContent: {},
});

class BookElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {bookName, bookImage} = this.props;
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
              uri: URL.SERVER + ':5035/tracks/getTrackImage/' + bookImage,
            }}
          />
        </View>
        <Text numberOfLines={2} style={{marginTop: 10, color: 'white'}}>
          {bookName}
        </Text>
      </View>
    );
  }
}

export default BookElement;
