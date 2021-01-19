import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  itemListContainer: {
    width: '100%',
    paddingVertical: 10,
    borderBottomColor: '#d2d2d2',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  listBookContentContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listImageContainer: {
    width: 40,
    height: 70,
  },
  itemGridContainer: {
    backgroundColor: '#636363',
    margin: 5,
    borderRadius: 5,
    width: (width * 43) / 100,
  },
  itemGridBackground: {
    paddingVertical: 10,
    height: 200,
  },
  itemGridTitle: {},
  imageStyle: {height: '100%', width: '100%'},
});

export default styles;
