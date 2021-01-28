import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from 'react-native';
import Pdf from 'react-native-pdf';
import URL from '../../Utils/constant/ConstURL';
import Header from '../Components/Header/Header';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  pdf: {
    width: '100%',
    height: '100%',
  },
  pagePreviewer: {
    justifyContent: 'center',
    paddingLeft: 15,
    height: 90,
    width: 90,
    position: 'absolute',
    backgroundColor: 'black',
    zIndex: 1,
    borderRadius: 50,
    right: -50,
    top: (width * 20) / 100,
  },
});

class BookPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHideHeader: false,
      page: '',
      isDownloaded: false,
    };
  }

  componentDidMount = () => {
    const {route, navigation} = this.props;
    const isDownloaded = route?.params?.isDownloaded;
    this.setState({isDownloaded: isDownloaded});
  };

  shouldComponentUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return true;
  }

  render() {
    const {isHideHeader, page, isDownloaded} = this.state;
    const {route, navigation} = this.props;
    const bookId = route?.params?.bookId;
    const path = route?.params?.path;
    const sourceDownloaded = {
      uri: 'file://' + path,
      cache: false,
    };
    const source = {
      uri: URL.SERVER + ':5035/books/openBook/' + bookId,
      cache: false,
    };
    if (isDownloaded === true) {
      return (
        <View style={styles.screenContainer}>
          <View style={styles.pagePreviewer}>
            <Text style={{color: 'white'}}>{page}</Text>
          </View>
          {isHideHeader ? null : (
            <Header
              headerText={'Book Preview'}
              navigation={this.props.navigation}
            />
          )}

          <Pdf
            onPageSingleTap={() => this.setState({isHideHeader: !isHideHeader})}
            source={sourceDownloaded}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              this.setState({page});
            }}
            onError={(error) => {
              console.log(error);
            }}
            onPressLink={(uri) => {
              console.log(`Link presse: ${uri}`);
            }}
            style={styles.pdf}
          />
          {/* <BookFooter /> */}
        </View>
      );
    } else {
      return (
        <View style={styles.screenContainer}>
          <View style={styles.pagePreviewer}>
            <Text style={{color: 'white'}}>{page}</Text>
          </View>
          {isHideHeader ? null : (
            <Header
              headerText={'Book Preview'}
              navigation={this.props.navigation}
            />
          )}

          <Pdf
            onPageSingleTap={() => this.setState({isHideHeader: !isHideHeader})}
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              this.setState({page});
            }}
            onError={(error) => {
              console.log(error);
            }}
            onPressLink={(uri) => {
              console.log(`Link presse: ${uri}`);
            }}
            style={styles.pdf}
          />
          {/* <BookFooter /> */}
        </View>
      );
    }
  }
}

export default BookPreview;
