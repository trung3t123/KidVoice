import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Header from '../Components/Header/Header';
import HighLights from './Components/HighLights';
import Books from './Components/Books';
import News from './Components/News';


const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,

	}
})

class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={{ flex: 1, }} >
				<Header navigation={this.props.navigation} headerText='Trang Chủ' />
				<View style={styles.contentContainer}>
					<ScrollView style={styles.content}>
						<HighLights />
						<Books />
						<News />
					</ScrollView>
				</View>

			</View>
		);
	}
}

export default HomeScreen;