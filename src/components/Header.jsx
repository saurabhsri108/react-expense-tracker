import React from 'react';

const Header = () => {
  return (
    <header className='bottom-shadow'>
      <a className='logo'>Expense Tracker</a>
      <nav>
        <ul className='nav-list'>
          <li className='font-semibold p-1 list-item'>Log in</li>
          <li className='font-semibold p-1 list-item'>Sign up</li>
          {/* <button className='btn btn-dark'>Dark</button>
          <button className='btn btn-light'>Light</button> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
