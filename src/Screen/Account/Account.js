import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {logoutUser, getUserData} from '../../redux/actions/User';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../Components/Header/Header';
import InfoUser from './Setting/InfoUser';

const styles = StyleSheet.create({
  settingOption: {
    marginVertical: 10,
    height: 50,
    width: '100%',
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 10,
    height: 50,
    width: '70%',
    backgroundColor: 'rgba(255,225,225,1)',
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'red',
  },
  textSetting: {
    fontSize: 15,
    fontWeight: '600',
    color: 'gray',
  },
});

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  render() {
    const {user} = this.props.user;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header headerText="Tài khoản" navigation={this.props.navigation} />
        <InfoUser profileUser={this.props.user.user} />
        <View style={{flex: 1, alignItems: 'center', padding: 20}}>
          <TouchableOpacity
            onPress={() => this.changePassword()}
            style={styles.settingOption}>
            <Text style={styles.textSetting}>Đổi mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('LanguageOptionScreen')
            }
            style={styles.settingOption}>
            <Text style={styles.textSetting}>Đổi ngôn ngữ</Text>
          </TouchableOpacity>
          {user.enrolled ? null : (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Pricing')}
              style={styles.settingOption}>
              <Text style={styles.textSetting}>Nạp lần đầu</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => this.props.logout()}
            style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="clearCache"
          onPress={async () => {
            await AsyncStorage.clear();
          }}
        />
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
    getUserProfile: () => dispatch(getUserData()),
    logout: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
