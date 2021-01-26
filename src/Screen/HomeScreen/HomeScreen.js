import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Header from '../Components/Header/Header';
import HighLights from './Components/HighLights';
import Books from './Components/Books';
import Track from './Components/Track';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, paddingBottom: (deviceHeight * 9) / 100}}>
        <Header navigation={this.props.navigation} headerText="Trang Chủ" />
        <View style={styles.contentContainer}>
          <ScrollView style={styles.content}>
            <HighLights />
            <Books navigation={this.props.navigation} />
            <Track navigation={this.props.navigation} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
