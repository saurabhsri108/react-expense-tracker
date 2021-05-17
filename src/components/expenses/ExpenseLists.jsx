import React from 'react';
import Card from '../utitlity/Card';
import Expense from './Expense';
import ExpenseFilter from './ExpenseFilter';

const ExpenseLists = ({ expenses }) => {
  return (
    <Card className='expense-list'>
      <h2 className='text-center'>Expense Lists</h2>
      <ExpenseFilter />
      {expenses.map((expense) => (
        <Expense key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default ExpenseLists;
