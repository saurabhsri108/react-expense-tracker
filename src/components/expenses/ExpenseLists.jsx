import React from 'react';
import Card from '../utitlity/Card';
import Expense from './Expense';
import ExpenseFilter from './ExpenseFilter';

const ExpenseLists = ({ expensesList }) => {
  console.log(expensesList);
  return (
    <Card className='expense-list'>
      <h2 className='text-center'>Expense Lists</h2>
      <ExpenseFilter />
      {expensesList.map((expense) => (
        <Expense key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default ExpenseLists;
