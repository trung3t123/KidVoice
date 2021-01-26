import React from 'react';
import {Text, View} from 'react-native';
import styles from '../style';

const SliderDots = ({dotsNumber}) => (
  <View style={styles.sliderDotsContainer}>
    <View style={dotsNumber === 1 ? styles.dotsActive : styles.dotsDisable} />
    <View style={dotsNumber === 2 ? styles.dotsActive : styles.dotsDisable} />
    <View style={dotsNumber === 3 ? styles.dotsActive : styles.dotsDisable} />
    <View style={dotsNumber === 4 ? styles.dotsActive : styles.dotsDisable} />
  </View>
);

export default SliderDots;
