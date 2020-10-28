import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, paddingBottom: deviceHeight * 9 / 100 }} >

        <Text> Search </Text>
      </View>
    );
  }
}

export default Search;
