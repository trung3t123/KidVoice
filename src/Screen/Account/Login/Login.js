import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../../../Utils/CustomIcon';
import IMAGE from '../../../Utils/ImageConst';
import {connect} from 'react-redux';
import {loginFacebook, loginUser} from '../../../redux/actions/User';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  loginFormContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  formLogin: {
    flex: 2,
  },
  inputText: {
    width: (deviceWidth * 80) / 100,
    borderColor: '#383838',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    borderRadius: 4,
    height: 50,
    width: (deviceWidth * 80) / 100,
    backgroundColor: '#e67272',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginState: {
    position: 'absolute',
    bottom: 25,
    alignItems: 'center',
  },
  facebookLoginButton: {
    marginBottom: 10,
    borderRadius: 4,
    width: (deviceWidth * 80) / 100,
    height: 50,
    backgroundColor: '#5990da',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMail: '',
      userPassword: '',
    };
  }

  loginUser = () => {
    const {userMail, userPassword} = this.state;

    console.log('userMail: ' + userMail);
    console.log('userPassword: ' + userPassword);
    this.props.login(userMail, userPassword);
  };

  facebookLoginHandler = () => {
    this.props.loginFacebook();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#c9c9c9', '#f5f5f5', '#ffffff']}
          style={styles.linearGradient}>
          <SafeAreaView style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={styles.loginFormContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    style={{
                      height: (deviceHeight * 30) / 100,
                      width: (deviceHeight * 30) / 100,
                      resizeMode: 'contain',
                    }}
                    source={IMAGE.appIcon}
                  />
                </View>
                <View style={styles.formLogin}>
                  <View style={styles.inputText}>
                    <CustomIcon
                      iconType="MaterialIcons"
                      name="alternate-email"
                      size={30}
                      color="#383838"
                    />
                    <TextInput
                      defaultValue={this.state.userMail}
                      onChangeText={(value) => this.setState({userMail: value})}
                      placeholder="Email"
                      placeholderTextColor="#383838"
                      style={{
                        paddingLeft: 10,
                        backgroundColor: 'transparent',
                        height: (deviceHeight * 10) / 100,
                        width: (deviceWidth * 80) / 100,
                      }}
                    />
                  </View>
                  <View style={styles.inputText}>
                    <CustomIcon
                      iconType="MaterialCommunityIcons"
                      name="lock-outline"
                      size={30}
                      color="#383838"
                    />
                    <TextInput
                      defaultValue={this.state.userPassword}
                      onChangeText={(value) =>
                        this.setState({userPassword: value})
                      }
                      placeholder="Password"
                      secureTextEntry={true}
                      placeholderTextColor="#383838"
                      style={{
                        paddingLeft: 10,
                        backgroundColor: 'transparent',
                        height: (deviceHeight * 10) / 100,
                        width: (deviceWidth * 80) / 100,
                      }}
                    />
                  </View>
                  <View style={styles.loginState}>
                    <TouchableOpacity
                      onPress={this.facebookLoginHandler}
                      style={styles.facebookLoginButton}>
                      <View style={{position: 'absolute', left: 10}}>
                        <CustomIcon
                          iconType="MaterialIcons"
                          name="facebook"
                          size={30}
                          color="#ffffff"
                        />
                      </View>
                      <Text style={{color: 'white'}}>
                        Đăng nhập bằng Facebook
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={this.loginUser}
                      style={styles.loginButton}>
                      <Text style={{color: 'white'}}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity onPress={this.onClick} />
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('Register')
                        }>
                        <Text
                          style={{
                            marginLeft: 10,
                            paddingTop: 5,
                          }}>
                          Đăng ký
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </LinearGradient>
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
    login: (userMail, userPassword) =>
      dispatch(loginUser(userMail, userPassword)),
    loginFacebook: () => dispatch(loginFacebook()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
