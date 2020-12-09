import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;

export const cardStyleInterpolatorRoot = ({current: {progress}}) => ({
  cardStyle: {
    opacity: progress.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.9, 1, 1],
    }),
    transform: [
      {
        translateY: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [height, 0],
        }),
      },
    ],
  },
  overlayStyle: {
    opacity: progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.5],
      // extrapolate: 'clamp',
    }),
  },
});

export const gestureConfig = {
  gestureEnabled: true,
  gestureDirection: 'vertical',
  gestureResponseDistance: {
    // vertical: 1000,
  },
  gestureVelocityImpact: 0.9,
};
