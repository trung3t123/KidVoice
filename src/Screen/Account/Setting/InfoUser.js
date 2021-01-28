import React, {memo} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewInfo: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  textName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  category: {
    fontSize: 15,
  },
  categoryContent: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const InfoUser = ({profileUser}) => {
  console.log('profile', profileUser);
  return (
    <View style={styles.viewInfo}>
      <Text style={styles.textName}>{profileUser.userName}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.category}>Sách đã nghe: </Text>
        <Text style={styles.categoryContent}>
          {profileUser?.userBooks?.length}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.category}>Sách đã đọc:</Text>
        <Text style={styles.categoryContent}>
          {profileUser?.playlist?.length} playlist
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.category}>loại tài khoản: </Text>
        {profileUser.enrolled ? (
          <Text style={styles.categoryContent}>đã nâng cấp</Text>
        ) : (
          <Text style={styles.categoryContent}>chưa nạp lần đầu</Text>
        )}
      </View>
    </View>
  );
};
export default memo(InfoUser);
