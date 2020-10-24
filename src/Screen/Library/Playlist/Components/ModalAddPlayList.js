import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { setModalVisible, createPlayList } from '../../../../redux/actions/Playlist';


const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;


const styles = StyleSheet.create({
	modalStyle: {
		height: deviceHeight * 70 / 100,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		paddingTop: deviceHeight * 5 / 100,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		alignItems: 'center',
		backgroundColor: '#ffffff'
	},
	modalBackground: {
		flex: 1,
	},
	modalTouchOutside: {
		height: deviceHeight,
		width: '100%',
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center'
	},
	playlistName: {
		width: '70%',
		height: deviceHeight * 10 / 100,
		fontSize: 30,
		fontWeight: 'bold',
		borderColor: '#636363',
		borderStyle: 'solid',
		borderBottomWidth: 1
	},
	createButton: {
		marginTop: 20,
		backgroundColor: '#636363',
		borderRadius: deviceWidth,
		width: '30%',
		height: deviceHeight * 7 / 100,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.46,
		shadowRadius: 11.14,

		elevation: 17,
	}
})

class ModalAddPlayList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playlistName: '',
		};
	}
	createPlayList() {
		this.props.setModalVisible(false);
		this.props.createPlayList(this.state.playlistName,this.props.userId)
	}

	componentDidMount() {
		this.textInput.focus();
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={() => this.props.setModalVisible(false)} style={styles.modalBackground} >
				<View style={styles.modalTouchOutside}>
					<View style={styles.modalStyle}>
						<Text style={{ fontSize: 20, fontWeight: '500' }}>Đặt tên cho playlist</Text>
						<TextInput
							ref={(input) => { this.textInput = input; }}
							onChangeText={(value) => this.setState({ playlistName: value })}
							style={styles.playlistName} />
						<TouchableOpacity style={styles.createButton} onPress={() => this.createPlayList()}>
							<Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '500' }}>
								Tạo
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback >
		);
	}
}
function mapStateToProps(state) {
	return {
		playlist: state.playlist,
		userId : state.user.user._id
	}

}

function mapDispatchToProps(dispatch) {
	return {
		setModalVisible: (visible) => dispatch(setModalVisible(visible)),
		createPlayList: (playlistName,userId) => dispatch(createPlayList(playlistName,userId))

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddPlayList);
