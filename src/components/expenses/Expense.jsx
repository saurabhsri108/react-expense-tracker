import React from 'react';
import Card from '../utitlity/Card';

const Expense = ({ title, amount, date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-IN', { month: 'short' });
  const day = date.toLocaleString('en-IN', { day: 'numeric' });
  return (
    <Card className='expense'>
      <div className='date-container'>
        <div className='month font-bold'>{month}</div>
        <div className='year font-bold'>{year}</div>
        <div className='day font-bold'>{day}</div>
      </div>
      <div className='expense-content'>
        <div className='title-container'>
          <h3 className='font-semibold'>{title}</h3>
        </div>
        <div className='amount-container'>
          <p className='font-bold'>₹{amount}</p>
        </div>
      </div>
    </Card>
  );
};

export default Expense;
