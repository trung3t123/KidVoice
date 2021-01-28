import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLogout } from 'slices/session/actions';
import ProfileSelector from 'slices/profileRestaurant/selector';

import { onSetProfileRestaurant } from 'slices/profileRestaurant/actions';
import Setting from './Setting';

const mapStateToProps = (state) => ({
  profileRestaurant: ProfileSelector.getProfileRestaurant(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleLogout, onSetProfileRestaurant }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
