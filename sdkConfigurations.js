import RNGoSell from '@tap-payments/gosell-sdk-react-native';
import {Platform} from 'react-native';
const {
  Languages,
  PaymentTypes,
  AllowedCadTypes,
  TrxMode,
  SDKMode,
} = RNGoSell.goSellSDKModels;
console.log('abs', Languages);
console.log('abs', PaymentTypes);
console.log('abs', AllowedCadTypes);
console.log('abs', TrxMode);
console.log('abs', SDKMode);

const appCredentials = {
  production_secrete_key:
    Platform.OS == 'ios' ? 'iOS-Live-KEY' : 'Android-Live-KEY',
  language: Languages.AR,
  sandbox_secrete_key:
    Platform.OS == 'ios' ? 'iOS-SANDBOX-KEY' : 'Android-SANDBOX-KEY',
  bundleID:
    Platform.OS == 'ios'
      ? 'org.reactjs.native.example.kidVoice'
      : 'ANDROIID-PACKAGE-NAME',
};

const transactionCurrency = 'sar';

const shipping = [
  {
    name: 'shipping 1',
    description: 'shiping description 1',
    amount: 100.0,
  },
];

const paymentitems = [
  {
    amount_per_unit: 1,
    description: 'Item 1 Apple',
    discount: {
      type: 'F',
      value: 10,
      maximum_fee: 10,
      minimum_fee: 1,
    },
    name: 'item1',
    quantity: {
      value: 1,
    },
    taxes: [
      {
        name: 'tax1',
        description: 'tax describtion',
        amount: {
          type: 'F',
          value: 10,
          maximum_fee: 10,
          minimum_fee: 1,
        },
      },
    ],
    total_amount: 100,
  },
];

const taxes = [
  {
    name: 'tax1',
    description: 'tax describtion',
    amount: {type: 'F', value: 10.0, maximum_fee: 10.0, minimum_fee: 1.0},
  },
  {
    name: 'tax1',
    description: 'tax describtion',
    amount: {type: 'F', value: 10.0, maximum_fee: 10.0, minimum_fee: 1.0},
  },
];

const customer = {
  isdNumber: '965',
  number: '00000000',
  customerId: '',
  first_name: 'test',
  middle_name: 'test',
  last_name: 'test',
  email: 'test@test.com',
};
const paymentReference = {
  track: 'track',
  payment: 'payment',
  gateway: 'gateway',
  acquirer: 'acquirer',
  transaction: 'trans_910101',
  order: 'order_262625',
  gosellID: null,
};

const allConfigurations = {
  appCredentials: appCredentials,
  sessionParameters: {
    paymentStatementDescriptor: 'paymentStatementDescriptor',
    transactionCurrency: transactionCurrency,
    isUserAllowedToSaveCard: true,
    paymentType: PaymentTypes.ALL,
    amount: '100',
    shipping: shipping,
    allowedCadTypes: AllowedCadTypes.CREDIT,
    paymentitems: paymentitems,
    paymenMetaData: {a: 'a meta', b: 'b meta'},
    applePayMerchantID: 'applePayMerchantID',
    authorizeAction: {timeInHours: 10, time: 10, type: 'CAPTURE'},
    cardHolderName: 'Card Holder NAME',
    editCardHolderName: false,
    postURL: 'https://tap.company',
    paymentDescription: 'paymentDescription',
    destinations: 'null',
    trxMode: TrxMode.PURCHASE,
    taxes: taxes,
    merchantID: '',
    SDKMode: SDKMode.Sandbox,
    customer: customer,
    isRequires3DSecure: false,
    receiptSettings: {id: null, email: false, sms: true},
    allowsToSaveSameCardMoreThanOnce: false,
    paymentReference: paymentReference,
  },
};

export default allConfigurations;
