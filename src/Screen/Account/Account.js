import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from './Login/Login';

class Account extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={{flex: 1}} >
				<Login navigation={this.props.navigation} />
			</View>
		);
	}
}

export default Account;
