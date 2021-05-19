import React from 'react';
import Modal from '../utitlity/Modal';

const Login = ({ showLoginFormHandler }) => {
  return (
    <Modal className='form-container' hideShowHandler={showLoginFormHandler}>
      <h2 className='text-center'>Login</h2>
      <form>
        <div className='form-group'>
          <label htmlFor='email'>
            Email <span className='req'>*</span>
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='example@gmail.com'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='pass'>
            Password <span className='req'>*</span>
          </label>
          <input
            type='password'
            name='pass'
            id='pass'
            placeholder='********'
            required
          />
        </div>
        <div className='text-center mt-2'>
          <button type='submit' className='btn btn-dark btn-large font-bold'>
            Login
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
