import { connect } from 'react-redux';
import styled from 'styled-components';

import { AddQuestionButton } from '../components';

const FloatingAddQuestionButton = styled(AddQuestionButton)`
  position: fixed;
  bottom: 24px;
  right: 24px;
`;

FloatingAddQuestionButton.propTypes = AddQuestionButton.propTypes;

const mapDispatchToProps = (dispatch, { history }) => ({
  onClick: () => {
    history.push('/add');
  }
});

export default connect(
  null,
  mapDispatchToProps
)(FloatingAddQuestionButton);
