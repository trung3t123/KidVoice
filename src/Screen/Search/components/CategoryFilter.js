import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const styles = StyleSheet.create({
  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    marginRight: 10,
  },
});

const CategoryFilter = ({filterName, chooseFilter, isActive}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        chooseFilter();
      }}
      style={[
        styles.categoryContainer,
        isActive ? {backgroundColor: '#6e7401'} : {backgroundColor: '#b9b9b9'},
      ]}>
      <Text style={{fontWeight: '600'}}>{filterName}</Text>
    </TouchableOpacity>
  );
};
export default CategoryFilter;
