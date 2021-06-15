import React, { useState } from 'react';
import Card from '../utitlity/Card';
import Expense from './Expense';
import ExpenseFilter from './ExpenseFilter';

const ExpenseLists = ({ expensesList }) => {
  const [filterExpenses, setFilterExpenses] = useState(expensesList);
  console.log(filterExpenses);
  const filterExpenseHandler = (dateValue) => {
    setFilterExpenses((previousFilterExpenses) => {
      const afterFilterExpenses = previousFilterExpenses.filter((expense) => {
        expense.date.getFullYear().toString() === dateValue;
      });
      console.log(afterFilterExpenses);
      return afterFilterExpenses;
    });
  };

  return (
    <Card className='expense-list'>
      <h2 className='text-center'>Expense Lists</h2>
      <ExpenseFilter filterExpense={filterExpenseHandler} />
      {filterExpenses.map((expense) => (
        <Expense key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default ExpenseLists;
