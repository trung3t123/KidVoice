import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';


const Player = (props) => {

	useEffect(() => {
		TrackPlayer.setupPlayer().then(() => {
			// The player is ready to be used
		});
	}, [])

	return (
		<View>
			<Text>componentName</Text>
		</View>
	)
};

export default Player;
