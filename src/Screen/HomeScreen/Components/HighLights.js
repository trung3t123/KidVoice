import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	highlightsContainer: {
		height: deviceHeight * 25 / 100,
		paddingRight: deviceWidth * 5 / 100,
		paddingLeft: deviceWidth * 5 / 100,
		width: '100%',
	},
	highlightsContent: {
		padding: 10,
		flex: 6,
		backgroundColor: '#5cd0ff',
		borderRadius: 5,
		width: '100%',
		height: '100%',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.30,
		elevation: 13,
	}
})

class HighLights extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={styles.highlightsContainer} >
				<Text style={{ flex: 1, fontSize: 17 }}>Nổi bật</Text>
				<View style={styles.highlightsContent} >
					<Text style={{ fontSize: 17 }}>Content HighLights</Text>

				</View>
			</View>
		);
	}
}

export default HighLights;
