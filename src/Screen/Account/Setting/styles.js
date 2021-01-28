import {StyleSheet} from 'react-native';

const spacingDefaultHorizontal = 10;
const spacingDefaultVertical = 15;

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'gray'},
  viewScrollContent: {
    paddingHorizontal: spacingDefaultHorizontal,
    marginTop: spacingDefaultHorizontal,
  },
  viewInfoRestaurant: {
    backgroundColor: 'white',
    paddingVertical: spacingDefaultVertical,
    marginBottom: spacingDefaultHorizontal,

    alignContent: 'center',
    alignItems: 'center',
  },

  restaurantStatus: {color: 'blue'},
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 999,
  },

  textNameRestaurant: {
    marginTop: spacingDefaultVertical,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textPhoneNumberRestaurant: {
    marginTop: spacingDefaultVertical,
    fontSize: 15,
  },
  textStatusOpening: {
    marginTop: spacingDefaultVertical,
    fontSize: 15,
  },

  buttonEditSetting: {
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 0,
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 10,
  },

  buttonLogout: {
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: spacingDefaultHorizontal,
  },

  logoutText: {
    color: 'gray',
  },

  textLabelButton: {
    color: 'colors.black',
    fontSize: 15,
    fontWeight: '400',
  },
});
