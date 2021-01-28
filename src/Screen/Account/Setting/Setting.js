import React, {memo, useEffect} from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {getUserData} from '../../../redux/actions/User';
import InfoUser from './InfoUser';
import message, {alertMessages} from './message';
import styles from './styles';

const Setting = ({logout, navigation, user}) => {
  const dispatch = useDispatch();
  const onGetProfileApi = async () => {
    dispatch(getUserData());
  };

  useEffect(() => {
    onGetProfileApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogout = () => {
    Alert.alert(alertMessages.alert, alertMessages.message, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => {
          logout();
        },
      },
    ]);
  };

  const onNavigateTo = (screenName) => {
    navigation?.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewScrollContent}>
          <InfoUser profileUser={user} />

          <Button
            style={styles.buttonEditSetting}
            title="personal Info"
            onPress={() => onNavigateTo('UpdateUser')}
          />

          <Button
            style={styles.buttonEditSetting}
            title="language setting"
            // onPress={() => onNavigateTo(ROUTES.CHANGE_LANGUAGE_SCREEN)}
          />

          <TouchableOpacity
            style={styles.buttonLogout}
            iconName="chevron-forward-outline"
            sizeIcon={30}
            onPress={() => onLogout()}>
            <Text style={styles.logoutText}>logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(Setting);
