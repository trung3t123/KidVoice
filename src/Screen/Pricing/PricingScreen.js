import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  LayoutAnimation,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from './components/Slider';
import PricingOptionsSession from './components/PricingOptionsSession';
import InstructionText from './components/InstructionText';
import orderApi from './service/orderApi';
import Axios from 'axios';
import URL from '../../Utils/constant/ConstURL';
import {useSelector} from 'react-redux';

const PricingScreen = ({navigation}) => {
  const userId = useSelector((state) => state.user.user._id);
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState(150000);
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
    switch (optionIndex) {
      case 0:
        setAmount(150000);
        break;
      case 1:
        setAmount(100000);
        break;
      case 2:
        setAmount(50000);
        break;
      default:
        break;
    }
  };

  const requestHyperPay = (checkoutId) => {
    console.log('requesting');
    const paymentType = 'visa';
    const data = {checkoutId, paymentType};
    const {NativeMethod} = NativeModules;
    NativeMethod.openHyperPay(
      data,
      handleTransactionSuccess(),
      handleTransactionError(),
    );
  };

  const handleTransactionError = () => (error) => {
    // need to setTimeout here because the modal Alert will causes conflict with native screen
    if (error === 'cancel') {
      console.log('transaction cancel status', error);
    } else {
      console.log('transaction error status', error);
    }
  };

  const handleTransactionSuccess = () => (status) => {
    if (status === 'success') {
      Axios.get(
        URL.SERVER + ':5035/api/users/updateEnroll/' + userId,
      ).then(() => alert('Thanh Toán thành công'));
    } else {
      alert('thanh toán không thành công');
    }
    console.log('order Status', status);
  };

  const createOrderHandler = async () => {
    try {
      const getCheckoutId = await orderApi.requestCheckoutIdForPayment(amount);
      console.log('Checkout Id data', getCheckoutId);
      if (getCheckoutId && getCheckoutId.data.data.id) {
        setTimeout(() => requestHyperPay(getCheckoutId.data.data.id), 100);
      }
    } catch (error) {
      console.log('error', error);
    }
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
          onPress={() => createOrderHandler()}
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
