import Axios from 'axios';
import URL from '../../../Utils/constant/ConstURL';

const requestCheckoutIdForPayment = (amount) => {
  return Axios.get(`${URL.SERVER}:5035/api/getCheckoutId/${amount}`);
};

const orderApi = {
  requestCheckoutIdForPayment,
};
export default orderApi;
