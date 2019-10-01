import { connect } from 'react-redux';

import { logOutAction } from '../actions';
import { Header } from '../components';

const mapStateToProps = ({ page, authentication }) => ({
  user: authentication.currentUser,
  title: page.current
});

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(logOutAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
