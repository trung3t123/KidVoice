import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';


const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, paddingBottom: deviceHeight * 9 / 100 }} >
        <Text> News </Text>
      </View>
    );
  }
}

export default News;
