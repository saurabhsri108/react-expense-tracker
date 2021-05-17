import React from 'react';

const ExpenseForm = () => {
  return (
    <section className='form-container'>
      <h2 className='text-center'>Expense Form</h2>
      <form>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='New Title'
            value={''}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            name='amount'
            id='amount'
            placeholder='New amount'
            value={''}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            name='date'
            min='2020-01-01'
            max='2022-01-01'
            id='date'
            placeholder='New date'
            value={''}
          />
        </div>
        <div className='text-center mt-2'>
          <button type='submit' className='btn btn-large btn-dark'>
            Add New Expense
          </button>
        </div>
      </form>
    </section>
  );
};

export default ExpenseForm;
