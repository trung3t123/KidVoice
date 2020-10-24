import React, { Component } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { register } from '../../../redux/actions/User';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../../../Utils/CustomIcon';


const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
	continue: {
		position: 'absolute',
		bottom: 25,
		alignItems: 'center',
		flexDirection: 'row',
	},
	registerButton: {
		borderRadius: 4,
		height: 60,
		width: SCREEN_WIDTH * 70 / 100,
		color: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		paddingTop: 30,
		flexDirection: 'row',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderColor: '#afa9a9',
		paddingBottom: 10,
	},
	backButton: {
		height: 60,
		borderRadius: 4,
		backgroundColor: '#e67272',
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	linearGradient: {
		flex: 1
	},
})


class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			userPassword: '',
			rePassword: '',
			userMail: '',
		};
	}

	registerButtonPressedHandler() {
		this.props.register({
			userName: this.state.userName,
			userPassword: this.state.userPassword,
			userMail: this.state.userMail
		});
	}
	registerFacebook() {
		this.props.registerWithFacebook
	}


	render() {
		return (
			<View style={{ flex: 1 }} >
				<LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#171717', '#404958', '#6597ea']} style={styles.linearGradient}>
					<SafeAreaView style={{ flex: 1, backgroundColor: ' rgba(0,0,0,0.4)' }}>
						<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.props.navigation.goBack()}>
							<CustomIcon iconType='AntDesign' name='left' size={30} color='#9d9d9d' />
						</TouchableOpacity>
						<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
							<View style={{ flex: 1, alignItems: 'center' }}>
								<View style={styles.textInput}>
									<MaterialIcons name="alternate-email" size={30} color='#ffffff' />
									<TextInput
										value={this.state.userMail}
										placeholder='Email'
										onChangeText={(value) => { this.setState({ userMail: value }) }}
										style={{ color: 'white', paddingLeft: 10, width: SCREEN_WIDTH * 80 / 100 }} />
								</View>
								<View style={styles.textInput}>
									<CustomIcon iconType='Entypo' name="key" size={30} color='#ffffff' />
									<TextInput
										value={this.state.userPassword}
										secureTextEntry={true}
										placeholder='Password'
										onChangeText={(value) => { this.setState({ userPassword: value }) }}
										style={{ color: 'white', paddingLeft: 10, width: SCREEN_WIDTH * 80 / 100 }} />
								</View>
								<View style={styles.textInput}>
									<CustomIcon iconType='Entypo' name="key" size={30} color='#ffffff' />
									<TextInput
										value={this.state.rePassword}
										secureTextEntry={true}
										placeholder='Re-Password'
										onChangeText={(value) => { this.setState({ rePassword: value }) }}
										style={{ color: 'white', paddingLeft: 10, width: SCREEN_WIDTH * 80 / 100 }} />
								</View>
								<View style={styles.textInput}>
									<AntDesign name="user" size={30} color='#ffffff' />
									<TextInput
										value={this.state.userName}
										placeholder='User Name'
										onChangeText={(value) => { this.setState({ userName: value }) }}
										style={{ color: 'white', paddingLeft: 10, width: SCREEN_WIDTH * 80 / 100 }} />
								</View>


								<View style={styles.continue}>

									<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
										<Ionicons name="chevron-back" color="white" size={50} />
									</TouchableOpacity>
									<TouchableOpacity onPress={() => this.registerButtonPressedHandler()} style={[styles.registerButton, {
										backgroundColor: 'rgba(185,183,183,0.4)',
									}]}>
										<Text style={{ color: 'white' }}>Register</Text>
									</TouchableOpacity>
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
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		register: (user) => dispatch(register(user))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);