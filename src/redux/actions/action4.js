import axios from 'axios';

const authAxios = axios.create({
  baseURL: process.env.REACT_APP_API_4,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await authAxios.get('users');
    dispatch({
      type: '4_SET_USERS',
      payload: await response.data,
    });
  };
};
