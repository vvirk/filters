import { connect } from 'react-redux';
import { Users } from '../components/Users/Users';
import { getUsers } from '../actions/index';

const mapStateToProps = state => ({
  users: state.users,
});
const mapDispatchToProps = {
  getUsers,
};
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);

export default UsersContainer;
