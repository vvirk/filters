import * as type from './actionTypes';

export const addUsers = users => ({
  type: type.ADD_USERS,
  users,
});

const url = 'https://venbest-test.herokuapp.com/';

export const getUsers = () => async dispatch => {
  try {
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addUsers(responseBody));
  } catch (e) {
    console.log(e);
  }
};

