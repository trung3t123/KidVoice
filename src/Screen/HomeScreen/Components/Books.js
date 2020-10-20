import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import BookElement from './BookElement';


const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	booksContainer: {
		marginTop: 20,
		height: deviceHeight * 30 / 100,
		paddingRight: deviceWidth * 5 / 100,
		paddingLeft: deviceWidth * 5 / 100,
		width: '100%',
	},

})

class Books extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={styles.booksContainer}>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<Text style={{ fontSize: 17 }}>Truyện</Text>
					<Text style={{ position: 'absolute', right: 0 }}>Xem thêm...</Text>
				</View>
				<View style={{ flex: 6 }}>
					<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
						<BookElement backgroundColor='#ffd15c' />
						<BookElement backgroundColor='#ff7b5c' />
						<BookElement backgroundColor='#5c9bff' />
					</ScrollView>
				</View>
			</View>
		);
	}
}

export default Books;
