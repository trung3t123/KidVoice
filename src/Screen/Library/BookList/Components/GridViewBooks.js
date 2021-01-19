import React, {Component, memo} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import CustomIcon from '../../../../Utils/CustomIcon';

class GridViewBooks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item, navigation} = this.props;
    return (
      <View style={styles.itemGridContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('BookPreview')}>
          <View style={styles.itemGridBackground}>
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('BookPreview')}>
            <View style={{width: '80%', paddingBottom: 5}}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginLeft: 10,
                  color: '#ffffff',
                }}>
                {item?.item?.bookName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={{justifyContent: 'center', paddingRight: 10}}>
            <CustomIcon
              iconType="MaterialCommunityIcons"
              name="dots-horizontal"
              size={20}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default memo(GridViewBooks);
