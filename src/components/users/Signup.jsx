import React from 'react';
import Modal from '../utitlity/Modal';

const Signup = ({ showRegisterFormHandler }) => {
  return (
    <Modal className='form-container' hideShowHandler={showRegisterFormHandler}>
      <h2 className='text-center'>Register</h2>
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
        <div className='form-group'>
          <label htmlFor='cpass'>
            Confirm Password <span className='req'>*</span>
          </label>
          <input
            type='password'
            name='cpass'
            id='cpass'
            placeholder='********'
            required
          />
        </div>
        <div className='text-center mt-2'>
          <button type='submit' className='btn btn-dark btn-large font-bold'>
            Register
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Signup;
