import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
import URL from '../../Utils/constant/ConstURL';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  pdf: {
    flex: 1,
    width: width,
    height: height,
  },
});

class BookPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {route, navigation} = this.props;
    const bookId = route?.params?.item?._id;
    const source = {
      uri: URL.SERVER + ':5035/books/openBook/' + bookId,
      cache: false,
    };
    return (
      <View style={styles.screenContainer}>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link presse: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
    );
  }
}

export default BookPreview;
