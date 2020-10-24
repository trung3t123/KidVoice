import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, Button, Image } from 'react-native';
import TrackPlayer from 'react-native-track-player';



const PlayerScreen = (props) => {

	useEffect(() => {
		TrackPlayer.setupPlayer().then(async () => {
			console.log('ready player');
			await TrackPlayer.add({
				id: 'trackId',
				url: 'http://103.102.46.103:5035/tracks/5f923e5dc8940d2b042efc32',
				title: 'Avaritia',
				artist: 'deadmau5',
				// album: 'while(1<2)',
				// genre: 'Progressive House, Electro House',
				// date: '2014-05-20T07:00:00+00:00', // RFC 3339
			}).then(() => {
				console.log('added Song');
			})
		});
	}, [])

	async function getSong() {
		let trackId = await TrackPlayer.getCurrentTrack();
		let trackObject = await TrackPlayer.getTrack(trackId);
		// Position, buffered position and duration return values in seconds
		let position = await TrackPlayer.getPosition();
		let buffered = await TrackPlayer.getBufferedPosition();
		let duration = await TrackPlayer.getDuration();
		console.log('track details', trackId, trackObject, position, buffered, duration);
	}

	async function playSong() {
		TrackPlayer.play();
	}


	async function pauseSong() {
		TrackPlayer.pause();
	}


	return (
		<View style={{ flex: 1 }} >
			<SafeAreaView style={{ flex: 1 }}>
				<Text>componentName</Text>
				<Button title="get song" onPress={getSong} >
				</Button>
				<Button title="play song" onPress={playSong} >
				</Button>
				<Button title="pause song" onPress={pauseSong} >
				</Button>
				{/* <Image style={{ height: 200, width: 200, resizeMode: 'center' }} source={{uri : 'http://192.168.0.122:5035/'}} /> */}
			</SafeAreaView>
		</View>
	)
};

export default PlayerScreen;
