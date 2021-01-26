import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../style';
import PricingPlan from './PricingPlan';

class PricingOptionsSession extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {activeOption, chooseOptionHandler} = this.props;
    return (
      <View style={{alignItems: 'center'}}>
        <PricingPlan
          popular
          rating="-45%"
          chooseOptionHandler={() => chooseOptionHandler(0)}
          active={activeOption === 0 ? true : false}
          subscribeTime="12 LUNI"
          subscribeCost="150 Lei"
          discountedAmount="15.00 Lei/Luna"
          planDetails="360 lei/an"
          transRate={1}
        />
        <PricingPlan
          chooseOptionHandler={() => chooseOptionHandler(1)}
          active={activeOption === 1 ? true : false}
          rating="-58%"
          subscribeTime="6 LUNI"
          subscribeCost="99 Lei"
          discountedAmount="15.50 Lei/Luna"
          planDetails="180 lei/an"
          transRate={0.6}
        />
        <PricingPlan
          chooseOptionHandler={() => chooseOptionHandler(2)}
          active={activeOption === 2 ? true : false}
          // rating="10%"
          subscribeTime="1 LUNA"
          subscribeCost="30 Lei"
          discountedAmount="1.00 Leu/ zi"
          planDetails=""
          transRate={0.3}
        />
      </View>
    );
  }
}
export default PricingOptionsSession;
