import axios from 'axios';

const authAxios = axios.create({
  baseURL: process.env.REACT_APP_API_5,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const postUser = (user) => {
  return async (dispatch) => {
    const response = await authAxios.post('users', user);
    dispatch({
      type: '5_ADD_USER',
      payload: await response.data,
    });
  };
};
