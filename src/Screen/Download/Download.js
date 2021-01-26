import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('window').width;

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    // this.readFile();
  };

  readFile = () => {};

  render() {
    return (
      <View style={{flex: 1, paddingBottom: (deviceHeight * 9) / 100}}>
        <Text> Download </Text>
      </View>
    );
  }
}

export default Download;
