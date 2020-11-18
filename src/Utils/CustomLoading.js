import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';

const CustomLoading = (props) => (
  <Modal useNativeDriver={true} isVisible={props.isVisible}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text
        style={{
          margin: 10,
          color: '#ffffff',
          fontSize: 20,
          fontWeight: '400',
        }}>
        Đang tải...
      </Text>
    </View>
  </Modal>
);

export default CustomLoading;
