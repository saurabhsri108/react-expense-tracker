import React from 'react';
import Card from '../utitlity/Card';
import Expense from './Expense';
import ExpenseFilter from './ExpenseFilter';

const ExpenseLists = () => {
  return (
    <Card className='expense-list'>
      <h2 className='text-center'>Expense Lists</h2>
      <ExpenseFilter />
      <Expense />
      <Expense />
      <Expense />
      <Expense />
    </Card>
  );
};

export default ExpenseLists;
