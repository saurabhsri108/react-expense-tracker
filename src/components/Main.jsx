import React from 'react';
import ExpenseForm from './expenseform/ExpenseForm';
import ExpenseLists from './expenses/ExpenseLists';

const Main = () => {
  return (
    <main className='container'>
      <ExpenseForm />
      <ExpenseLists />
    </main>
  );
};

export default Main;
