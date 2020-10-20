import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import CustomIcon from '../../../Utils/CustomIcon';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		height: deviceHeight * 7 / 100,
		width: deviceWidth,
		alignItems: 'center',
		paddingLeft: 20,
	},
	headerText: {
		fontSize: 25,
		fontWeight: 'bold'
	}
})

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>{this.props.headerText}</Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Account')} style={{ position: 'absolute', right: deviceWidth * 5 / 100 }}>
					<CustomIcon iconType="EvilIcons" name="user" size={40} color='#000000' />
				</TouchableOpacity>
			</View>
		);
	}
}

export default Header;
