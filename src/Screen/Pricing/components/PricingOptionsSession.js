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
          subscribeTime="12 Tháng"
          subscribeCost="150.000 đ"
          discountedAmount="15.000 đ/tháng"
          planDetails="360 đ/ngày"
          transRate={1}
        />
        <PricingPlan
          chooseOptionHandler={() => chooseOptionHandler(1)}
          active={activeOption === 1 ? true : false}
          rating="-58%"
          subscribeTime="6 tháng"
          subscribeCost="99.000 đ"
          discountedAmount="15.50 đ/tháng"
          planDetails="180 đ/ngày"
          transRate={0.6}
        />
        <PricingPlan
          chooseOptionHandler={() => chooseOptionHandler(2)}
          active={activeOption === 2 ? true : false}
          // rating="10%"
          subscribeTime="1 tháng"
          subscribeCost="50.000 đ"
          discountedAmount="1.00 đ/ ngày"
          planDetails=""
          transRate={0.3}
        />
      </View>
    );
  }
}
export default PricingOptionsSession;
