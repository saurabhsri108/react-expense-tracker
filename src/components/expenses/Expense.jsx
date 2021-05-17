import React from 'react';
import Card from '../utitlity/Card';

const Expense = () => {
  return (
    <Card className='expense'>
      <div className='date-container'>
        <div className='month font-semibold'>May</div>
        <div className='year font-semibold'>2021</div>
        <div className='day font-semibold'>17</div>
      </div>
      <div className='title-container'>
        <h3 className='font-semibold'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
          adipisci?
        </h3>
      </div>
      <div className='amount-container'>
        <p className='font-semibold'>₹40000.00</p>
      </div>
    </Card>
  );
};

export default Expense;
