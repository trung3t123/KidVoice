import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('window').width;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, paddingBottom: (deviceHeight * 9) / 100}}>
        <Text> Search </Text>
      </View>
    );
  }
}

export default Search;
