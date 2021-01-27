import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import URL from '../../../Utils/constant/ConstURL';
import CustomIcon from '../../../Utils/CustomIcon';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  bookElementContainer: {
    height: 70,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  imageContainer: {
    height: '100%',
    width: 70,
    padding: 10,
    backgroundColor: '#5d5d5d',
  },
});

class BookElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailHeight: 0,
    };
  }

  shouldComponentUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return true;
  }

  render() {
    const {bookName, bookImage, bookId, book} = this.props;
    const {detailHeight} = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({detailHeight: 70})}
          style={styles.bookElementContainer}>
          <View style={styles.imageContainer}>
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

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomIcon
              iconType="Entypo"
              name="book"
              size={20}
              color="#5d5d5d"
            />
            <Text numberOfLines={2} style={{marginLeft: 5, fontSize: 15}}>
              {bookName}
            </Text>
          </View>
          <View style={{position: 'absolute', right: 0}}>
            <CustomIcon iconType="MaterialIcons" name="more-horiz" size={20} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: detailHeight,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('BookPreview', {
                  isDownloaded: true,
                  path: book.path,
                });
              }}
              style={{paddingHorizontal: 20, borderRightWidth: 1}}>
              <CustomIcon
                iconType="FontAwesome5"
                name="book-reader"
                size={25}
                color="#5d5d5d"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.setState({detailHeight: 0})}
              style={{}}>
              <CustomIcon iconType="AntDesign" name="closecircle" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default BookElement;
