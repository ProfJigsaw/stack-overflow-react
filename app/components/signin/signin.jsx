import React from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import MainLayout from '../containers/layouts/mainlayout';
import { signUserIn } from '../../utilities/users';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      isLoading: true
    });
    signUserIn(this.state)
      .then((response) => {
        localStorage.setItem('stack-jwt', response.data.token);
        const decodedInfo = jwtDecode(response.data.token);
        localStorage.setItem('stack-userid', decodedInfo.authUser.userid);
        localStorage.setItem('stack-username', decodedInfo.authUser.username);
        this.props.history.push('/');
      })
      .catch((error) => {
        const { data } = error.response;
        this.setState({
          errors: data,
          isLoading: false
        });
        setTimeout(() => {
          this.setState({
            errors: {}
          });
        }, 3000);
      });
  }

  render() {
    const { errors } = this.state;
    return (
      <MainLayout nav={false}>
        <div>
          <br />
          <div className="wrapper forms">
            <form className="form">
              <h1 className="form-title">Welcome back</h1>
              <div className="form-group">
                <input
                  name="username"
                  className={`form-input ${errors.message && 'input-error'}`}
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  name="password"
                  className={`form-input ${errors.message && 'input-error'}`}
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <button
                className="form-button"
                onClick={this.handleSubmit}
                disabled={this.state.isLoading}
              >
              Sign In
                {
                  this.state.isLoading && <i className="fa fa-spinner fa-spin" />
                }
              </button>

              <Link className="sign-info" to="/signup">
                  Dont have an account? Sign Up instead
              </Link>

              {
                errors.message
              && <p className="error-info">
                {errors.message}
              </p>
              }
            </form>
          </div>
        </div>
      </MainLayout>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.object.isRequired
};

export default Signup;
