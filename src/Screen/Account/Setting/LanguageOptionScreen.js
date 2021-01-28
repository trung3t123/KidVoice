import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import IMAGE from '../../../Utils/ImageConst';
import Header from '../../Components/Header/Header';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    padding: 20,
  },
  languageChoose: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default class LanguageOptionScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header headerText="Đổi ngôn ngữ" />

        <View style={styles.imageContainer}>
          <View style={styles.languageChoose}>
            <Image
              source={IMAGE.vietNam}
              style={{
                height: 35,
                width: 35,
                resizeMode: 'cover',
                marginHorizontal: 10,
              }}
            />
            <Text>VietNam</Text>
          </View>
          <View style={styles.languageChoose}>
            <Image
              source={IMAGE.unitedState}
              style={{
                height: 35,
                width: 35,
                resizeMode: 'cover',
                marginHorizontal: 10,
              }}
            />
            <Text>United State</Text>
          </View>
        </View>
      </View>
    );
  }
}
