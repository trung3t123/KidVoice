import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setModalVisible, createPlayList } from '../../../redux/actions/Playlist';
import ModalAddPlayList from './Components/ModalAddPlayList';
import CustomIcon from '../../../Utils/CustomIcon';


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
		flexDirection: 'row',
		alignItems: 'center'
	},
	addPlayListButton: {
		backgroundColor: '#636363',
		height: deviceHeight * 10 / 100,
		width: deviceHeight * 10 / 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

const PlayListElement = (props) => {
	console.log('playListName', props.playlistName);
	return (
		<View style={styles.playListContainer} >
			<TouchableOpacity style={styles.playListContent} >
				<View style={styles.addPlayListButton}>
					<CustomIcon iconType='Ionicons' name='add' size={30} color='#ffffff' />
				</View>
				<Text style={{ fontSize: 20, fontWeight: '400', marginLeft: 10 }}>{props.playlistName}</Text>
			</TouchableOpacity>
		</View>
	)
}

class PlayList extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		console.log('modalVisible', this.props.playlist.modalVisible);
		return (
			<View style={{ flex: 1, padding: 12 }}>
				<View style={styles.playListContainer} >
					<TouchableOpacity onPress={() => this.props.setModalVisible(true)} style={styles.playListContent} >
						<View style={styles.addPlayListButton}>
							<CustomIcon iconType='Ionicons' name='add' size={30} color='#ffffff' />
						</View>
						<Text style={{ fontSize: 20, fontWeight: '400', marginLeft: 10 }}>Add more playlist ?</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={this.props.playlist.playlist}
					renderItem={(item) => {
						console.log('item', item);
						return (
							<PlayListElement key={item.item._id} playlistName={item.item.playlistName} />
						)
					}}
					keyExtractor={item => item._id.toString()}
				/>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		playlist: state.playlist,
	}

}

function mapDispatchToProps(dispatch) {
	return {
		setModalVisible: (visible) => dispatch(setModalVisible(visible)),
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
