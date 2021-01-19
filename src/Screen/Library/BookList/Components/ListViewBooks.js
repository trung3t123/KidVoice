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

class ListViewBooks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item, navigation} = this.props;
    return (
      <View style={styles.itemListContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('BookPreview', item)}>
          <View style={styles.listImageContainer}>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={{
                uri:
                  'https://images-na.ssl-images-amazon.com/images/I/817kywRJjVL.jpg',
              }}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.listBookContentContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('BookPreview', item)}>
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
