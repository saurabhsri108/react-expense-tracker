import React from 'react';
import Card from '../utitlity/Card';

const Expense = ({ id, title, amount, date }) => {
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString('en-IN', { month: 'long' });
  const day = new Date().toLocaleString('en-IN', { day: 'numeric' });
  return (
    <Card className='expense'>
      <div className='date-container'>
        <div className='month font-semibold'>{month}</div>
        <div className='year font-semibold'>{year}</div>
        <div className='day font-semibold'>{day}</div>
      </div>
      <div className='title-container'>
        <h3 className='font-semibold'>{title}</h3>
      </div>
      <div className='amount-container'>
        <p className='font-semibold'>₹{amount}</p>
      </div>
    </Card>
  );
};

export default Expense;
