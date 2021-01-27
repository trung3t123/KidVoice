import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  sliderTitle: {
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 20,
  },
  sliderSubtitle: {
    fontSize: 15,
    paddingVertical: 10,
    textAlign: 'center',
  },
  dotsActive: {
    height: 10,
    width: 10,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: '#1a1a1a',
  },
  presentQuote: {
    marginVertical: 40,
    height: 30,
    backgroundColor: '#85d48d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderTopWidth: 50,
    borderLeftWidth: 50,
    borderStyle: 'solid',
    borderTopRightRadius: 5,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'orange',
  },
  instructionTextBold: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instructionTextNormal: {
    fontSize: 15,
    textAlign: 'center',
  },
  textEpic: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  popularTag: {
    width: '40%',
    height: 25,
    bottom: '90%',
    left: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: 'orange',
  },
  textEpicActive: {
    fontSize: 15,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: 'white',
  },
  textChild: {
    fontSize: 10,
  },
  textDiscountDetail: {
    fontSize: 10,
    textDecorationLine: 'line-through',
    alignSelf: 'flex-end',
  },
  textDiscountDetailActive: {
    fontSize: 10,
    textDecorationLine: 'line-through',
    color: 'white',
    alignSelf: 'flex-end',
  },
  textChildActive: {
    fontSize: 10,
    color: 'white',
  },
  pricingContentContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  discountAmount: {
    position: 'absolute',
    transform: [{rotate: '45deg'}],
    right: -5,
    top: 10,
    zIndex: 1,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  optionContainer: {
    borderRadius: 5,
    marginVertical: 5,
    width: '85%',
    height: 90,
  },
  optionContainerActive: {
    marginVertical: 5,
    backgroundColor: '#1a1a1a',
    borderRadius: 5,
    width: '85%',
    height: 90,
  },
  dotsDisable: {
    height: 10,
    width: 10,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: '#a9a9a9',
  },
  continueButton: {
    height: 60,
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  continueButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  closeButtonContainer: {
    zIndex: 99,
    position: 'absolute',
    top: 40,
    right: 40,
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#cbcbcb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    marginTop: (height * 5) / 100,
    alignItems: 'center',
  },
  sliderDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    height: (height * 10) / 100,
    width: (width * 40) / 100,
  },
  sliderChild: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;