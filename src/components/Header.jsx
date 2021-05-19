import React, { useState } from 'react';
import Login from './users/Login';
import Signup from './users/Signup';

const Header = () => {
  const [isLoginFormVisible, setLoginFormVisibility] = useState(false);
  const [isRegistrationFormVisible, setRegistrationFormVisibility] =
    useState(false);

  const showLoginFormHandler = () => {
    setLoginFormVisibility(!isLoginFormVisible);
  };

  const showRegisterFormHandler = () => {
    setRegistrationFormVisibility(!isRegistrationFormVisible);
  };

  return (
    <header className='bottom-shadow'>
      <a className='logo'>Expense Tracker</a>
      <nav>
        <ul className='nav-list'>
          <li
            className='font-semibold p-1 list-item'
            onClick={showLoginFormHandler}
          >
            Log in
          </li>
          <li
            className='font-semibold p-1 list-item'
            onClick={showRegisterFormHandler}
          >
            Sign up
          </li>
        </ul>
      </nav>
      {isLoginFormVisible && (
        <Login showLoginFormHandler={showLoginFormHandler} />
      )}
      {isRegistrationFormVisible && (
        <Signup showRegisterFormHandler={showRegisterFormHandler} />
      )}
    </header>
  );
};

export default Header;
