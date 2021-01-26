import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from './components/Slider';
import PricingOptionsSession from './components/PricingOptionsSession';
import InstructionText from './components/InstructionText';

const PricingScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [activeOption, setActiveOption] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const renderCloseButton = () => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.closeButtonContainer}>
          <Ionicons name="close" size={20} color={'#5d5d5d'} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const chooseOptionHandler = (optionIndex) => {
    setActiveOption(optionIndex);
  };

  return (
    <View style={{flex: 1}}>
      {visible ? renderCloseButton() : null}
      <ScrollView style={styles.modalBackground}>
        <Slider />
        <View style={styles.presentQuote}>
          <Text>easyyyyyy</Text>
        </View>
        <PricingOptionsSession
          activeOption={activeOption}
          chooseOptionHandler={(index) => chooseOptionHandler(index)}
        />
        <Text style={{textAlign: 'center', marginVertical: 5, fontSize: 12}}>
          Trial line for 7 days using without paying any thing
        </Text>
        <TouchableOpacity
          style={[
            styles.continueButton,
            activeOption === null
              ? {
                  backgroundColor: '#bababa',
                }
              : {backgroundColor: 'orange'},
          ]}>
          <Text style={styles.continueButtonText}>Countinua</Text>
        </TouchableOpacity>
        <InstructionText />
      </ScrollView>
    </View>
  );
};
export default PricingScreen;
