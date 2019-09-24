import * as type from '../actions/actionTypes';

export const initialState = {
  users: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};