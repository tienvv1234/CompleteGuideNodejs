import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  console.log('9');
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  console.log('handleToken');
  const res = await axios.post('api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
