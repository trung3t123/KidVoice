import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import playList from '../../../Utils/TempFiles/TempSongs/PlayList';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	playListContainer: {
		width: '100%',
		height: deviceHeight * 13 / 100,
		marginBottom: 10
	},
	playListContent: {
		flex: 1,
		backgroundColor: 'red',
	}
})

const PlayList = (props) => {
	return (
		<View style={styles.playListContainer} >
			<TouchableOpacity style={styles.playListContent} >
				<Text>{props.playListName + 'asdasd'}</Text>
			</TouchableOpacity>
		</View>
	)
}

class ListPlaylist extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={{ flex: 1, padding: 12 }}>
				<FlatList
					data={playList}
					renderItem={(item) => {
						console.log(item.playListName);
						return (
							<PlayList playListName={item.playlistName} songList={item.songList} />
						)
					}}
					keyExtractor={item => item.idList}
				/>
				
			</View>
		);
	}
}

export default ListPlaylist;
