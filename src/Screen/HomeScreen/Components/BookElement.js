import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	bookElementContainer: {
		width: deviceWidth / 2.5,
		marginRight: 20,
		padding: 10,
		height: '100%'
	},
	bookElementContent: {
		flex: 1,
		borderRadius: 5,
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

class BookElement extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<View style={styles.bookElementContainer}>
				<View style={[styles.bookElementContent, { backgroundColor: this.props.backgroundColor }]}>
				</View>
				<Text style={{ marginTop: 10 }} >Tên Truyện</Text>
			</View>
		);
	}
}

export default BookElement;
