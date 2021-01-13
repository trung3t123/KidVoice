import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import CustomIcon from '../../../../Utils/CustomIcon';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingVertical: 10,
  },
  filterModeChooser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showingModeChooser: {
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: '100%',
    paddingHorizontal: 5,
    marginLeft: 10,
  },
});

const Filter = ({showGrid, toggleShowGrid}) => {
  return (
    <View style={styles.container}>
      <View style={styles.filterModeChooser}>
        <Text>Sort by name</Text>
        <CustomIcon
          iconType="AntDesign"
          name="down"
          size={15}
          color="#7f7f7f"
        />
      </View>
      <View style={styles.showingModeChooser}>
        <TouchableWithoutFeedback onPress={() => toggleShowGrid(false)}>
          <View
            style={[
              styles.iconContainer,
              showGrid ? null : {backgroundColor: '#7f7f7f'},
            ]}>
            <CustomIcon
              iconType="MaterialCommunityIcons"
              name="view-list"
              size={30}
              color="#141414"
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => toggleShowGrid(true)}>
          <View
            style={[
              styles.iconContainer,
              showGrid ? {backgroundColor: '#7f7f7f'} : null,
            ]}>
            <CustomIcon
              iconType="MaterialCommunityIcons"
              name="view-grid"
              size={30}
              color="#141414"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Filter;
