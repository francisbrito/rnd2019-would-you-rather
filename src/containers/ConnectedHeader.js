import { connect } from 'react-redux';
import { Header } from '../components';

const mapStateToProps = ({ page, authentication }) => ({
  user: {
    name: authentication.currentUser.playerName,
    profilePicture: authentication.currentUser.playerPicture
  },
  title: page.current
});

export default connect(mapStateToProps)(Header);
