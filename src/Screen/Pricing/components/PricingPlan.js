import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from '../style';

const PricingPlan = ({
  active,
  rating,
  subscribeTime,
  subscribeCost,
  discountedAmount,
  planDetails,
  chooseOptionHandler,
  popular,
  transRate,
}) => (
  <TouchableWithoutFeedback onPress={() => chooseOptionHandler()}>
    <View
      style={
        active
          ? styles.optionContainerActive
          : [
              styles.optionContainer,
              {backgroundColor: `rgba(186,186,186,${transRate})`},
            ]
      }>
      {popular ? (
        <View style={styles.popularTag}>
          <Text style={styles.textEpicActive}>Popular</Text>
        </View>
      ) : null}
      <Text style={styles.discountAmount}>{rating}</Text>
      {rating ? <View style={styles.discountTag} /> : null}

      <View style={styles.pricingContentContainer}>
        <View>
          <Text style={active ? styles.textEpicActive : styles.textEpic}>
            {subscribeTime}
          </Text>
          <Text style={active ? styles.textChildActive : styles.textChild}>
            {subscribeCost}
          </Text>
        </View>
        <View>
          <Text style={active ? styles.textEpicActive : styles.textEpic}>
            {discountedAmount}
          </Text>
          <Text
            style={
              active
                ? styles.textDiscountDetailActive
                : styles.textDiscountDetail
            }>
            {planDetails}
          </Text>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default PricingPlan;
