import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    signUpStart(displayName, email, password);
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          label='Email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type='text'
          name='displayName'
          label='Display Name'
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);
