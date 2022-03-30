import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await axios.get(process.env.REACT_APP_API_3 + 'users');
    dispatch({
      type: 'SET_USERS',
      payload: await response.data,
    });
  };
};

export const postUser = (user) => {
  return async (dispatch) => {
    const response = await axios.post(process.env.REACT_APP_API_3 + 'users', user);
    dispatch({
      type: 'ADD_USER',
      payload: await response.data,
    });
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    await axios.delete(process.env.REACT_APP_API_3 + 'users/' + id);
    dispatch({
      type: 'DELETE_USER',
      payload: id,
    });
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    const response = await axios.put(process.env.REACT_APP_API_3 + 'users/' + user.id, user);
    dispatch({
      type: 'UPDATE_USER',
      payload: await response.data,
    });
  };
};
