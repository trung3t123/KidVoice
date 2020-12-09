import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/actions/User';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Text>Upload Product</Text>
          <View></View>
        </View>
        <Text> Logged in </Text>
        <TouchableOpacity
          onPress={() => this.props.logout()}
          style={{backgroundColor: 'red', height: 60, width: 100}}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
