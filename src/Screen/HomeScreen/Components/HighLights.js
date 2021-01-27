import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import IMAGE from '../../../Utils/ImageConst';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  highlightsContainer: {
    height: (deviceHeight * 28) / 100,
    paddingRight: (deviceWidth * 5) / 100,
    paddingLeft: (deviceWidth * 5) / 100,
    width: '100%',
  },
  highlightsContent: {
    padding: 10,
    flex: 6,
    backgroundColor: '#c5c5c5',
    borderRadius: 5,
    width: '100%',
    height: '100%',
  },
});

class HighLights extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.highlightsContainer}>
        <Text style={{flex: 1, fontSize: 17}}>Thư viện</Text>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate('Library')}>
          <View style={styles.highlightsContent}>
            <Image
              source={IMAGE.library}
              style={{height: '100%', width: '100%', resizeMode: 'cover'}}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default HighLights;
