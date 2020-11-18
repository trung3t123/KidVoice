import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Account from './Screen/Account/Account';
import Splash from './Screen/Splash/Splash';
import PlayerScreen from './Screen/Player/PlayerScreen';
import Register from './Screen/Account/Register/Register';
import Login from './Screen/Account/Login/Login';
import {connect} from 'react-redux';
import {getUserData} from './redux/actions/User';

const Stack = createStackNavigator();

class Authorize extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getUserData();
  };

  render() {
    if (!this.props.user.loggedInStatus) {
      return <Login navigation={this.props.navigation} />;
    } else
      return (
        <View style={{flex: 1}}>
          <Stack.Navigator headerMode="none" initialRouteName="Splash">
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Player" component={PlayerScreen} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Splash" component={Splash} />
          </Stack.Navigator>
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
    getUserData: () => dispatch(getUserData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
