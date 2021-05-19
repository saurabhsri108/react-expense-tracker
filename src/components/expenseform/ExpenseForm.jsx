import React, { useRef } from 'react';

const ExpenseForm = ({ addNewExpense }) => {
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  const expenseFormSubmitHandler = (event) => {
    event.preventDefault();
    if (
      titleRef.current.value != '' &&
      amountRef.current.value != '' &&
      dateRef.current.value != ''
    ) {
      const newExpense = {
        id: Math.floor(Math.random() * 10000) + 1,
        title: titleRef.current.value,
        amount: parseFloat(amountRef.current.value),
        date: new Date(dateRef.current.value),
      };
      titleRef.current.value = '';
      amountRef.current.value = '';
      dateRef.current.value = '';
      addNewExpense(newExpense);
    }
  };
  return (
    <section className='card form-container'>
      <h2 className='text-center'>Expense Form</h2>
      <form onSubmit={expenseFormSubmitHandler}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='New Title'
            required
            ref={titleRef}
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
            required
            ref={amountRef}
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
            required
            ref={dateRef}
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
