import React, {Component} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import styles from '../style';
import SliderDots from './SliderDots';
import IMAGE from '../../../Utils/ImageConst';

const data = [
  {
    title: 'Download',
    subTitle: 'Nghe mọi lúc mọi nơi',
  },
  {
    title: 'Tốc độ cao',
    subTitle: 'Trải nghiệm sách đọc tốc độ cao',
  },
  {
    title: 'Lap trinh that don gian',
    subTitle: 'khong co gi ca, mang het moi thu ra day',
  },
  {
    title: 'Front end that ez',
    subTitle: 'khong co gi ca, mang het moi thu ra day',
  },
];

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dotsNum: 1,
    };
  }

  onScrollEnd(e) {
    let contentOffset = e.nativeEvent.contentOffset;
    console.log('content', contentOffset.x);
    let viewSize = e.nativeEvent.layoutMeasurement;
    console.log('ViewSize', viewSize);
    let pageNum = Math.round(contentOffset.x / viewSize.width) + 1;
    console.log('scrolled to page ', pageNum);
    this.setState({dotsNum: pageNum});
  }

  render() {
    const {dotsNum} = this.state;
    return (
      <View style={styles.sliderContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          data={data}
          onMomentumScrollEnd={this.onScrollEnd.bind(this)}
          renderItem={({item}) => (
            <View style={styles.sliderChild}>
              <View style={styles.iconContainer}>
                <Image
                  style={{height: '100%', resizeMode: 'contain', width: '100%'}}
                  source={IMAGE.appIcon}
                />
              </View>
              <View style={{alignItems: 'center', width: '60%'}}>
                <Text style={styles.sliderTitle}>{item.title}</Text>
                <Text style={styles.sliderSubtitle}>{item.subTitle}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <SliderDots dotsNumber={dotsNum} />
      </View>
    );
  }
}
