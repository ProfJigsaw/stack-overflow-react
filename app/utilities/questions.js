import axios from 'axios';
import { getToken } from './auth';

export const postQuestion = ({ title, body }) => {
  return axios.post('https://nvc-stackqa.herokuapp.com/api/v1/questions',
    {
      title,
      question: body
    }, {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    });
};

export const dummy = 'dddd';
