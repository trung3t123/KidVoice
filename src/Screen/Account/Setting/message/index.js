import LocalizedStrings from 'react-native-localization';
// import {injectStringBundleSet} from 'services/language';
import en from './en';
import ar from './ar';

const message = new LocalizedStrings({en, ar});

export const alertMessages = {
  alert: 'Warning!',
  message:
    'Are you meant to log out? Your restaurant will not available on market',
};

// injectStringBundleSet(message);

export default message;
