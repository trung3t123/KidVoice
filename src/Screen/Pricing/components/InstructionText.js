import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../style';

export default class InstructionText extends Component {
  render() {
    return (
      <View
        style={{
          width: '85%',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={styles.instructionTextBold}>
          Recurring payment, you can cancel at
        </Text>
        <Text style={styles.instructionTextNormal}>
          by clicking blah blah by clicking blah blah by clicking blah blah by
          clicking blah blah by clicking blah blah by clicking blah blah
          <Text style={styles.instructionTextBold}>
            Cookies Policy and the blah blah
          </Text>
        </Text>
      </View>
    );
  }
}
