import React, {Component, memo} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './style';
import CustomIcon from '../../../../Utils/CustomIcon';
import URL from '../../../../Utils/constant/ConstURL';

class ListViewBooks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item, navigation} = this.props;
    return (
      <View style={styles.itemListContainer}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('BookPreview', {bookId: item.item._id})
          }>
          <View style={styles.listImageContainer}>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={{
                uri:
                  URL.SERVER +
                  ':5035/tracks/getTrackImage/' +
                  item.item.bookImage,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.listBookContentContainer}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('BookPreview', {bookId: item.item._id})
            }>
            <View style={{flex: 1}}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginLeft: 10,
                }}>
                {item?.item?.bookName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <CustomIcon
              iconType="MaterialCommunityIcons"
              name="dots-horizontal"
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default memo(ListViewBooks);
