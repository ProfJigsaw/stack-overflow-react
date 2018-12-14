import axios from 'axios';

const signUserUp = user => axios
  .post('https://nvc-stackqa.herokuapp.com/api/v1/auth/signup', {
    username: user.username,
    email: user.email,
    password: user.password
  });

export default signUserUp;
