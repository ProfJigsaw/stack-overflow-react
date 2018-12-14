import axios from 'axios';

export const signUserUp = user => axios
  .post('https://nvc-stackqa.herokuapp.com/api/v1/auth/signup', {
    username: user.username,
    email: user.email,
    password: user.password
  });

export const signUserIn = user => axios
  .post('https://nvc-stackqa.herokuapp.com/api/v1/auth/login', {
    username: user.username,
    password: user.password
  });
