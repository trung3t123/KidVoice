import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';




class CustomIcon extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {

		switch (this.props.iconType) {
			case 'AntDesign': {
				return <AntDesign name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			case 'EvilIcons': {
				return <EvilIcons name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			case 'Entypo': {
				return <Entypo name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			case 'FontAwesome': {
				return <FontAwesome name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			case 'FontAwesome5': {
				return <FontAwesome5 name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			case 'Ionicons': {
				return <Ionicons name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			case 'MaterialCommunityIcons': {
				return <MaterialCommunityIcons name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			case 'MaterialIcons': {
				return <MaterialIcons name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			case 'Octicons': {
				return <Octicons name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			case 'SimpleLineIcons': {
				return <SimpleLineIcons name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			case 'Zocial': {
				return <Zocial name={this.props.name} size={this.props.size} color={this.props.color} />
			}
			default: {
				return null
			}
		}

	}
}

export default CustomIcon;
