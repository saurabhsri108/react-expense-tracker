import React, { useState, useEffect } from 'react';
import ExpenseForm from './expenseform/ExpenseForm';
import ExpenseLists from './expenses/ExpenseLists';

const Main = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, adipisci?',
      amount: 4000.0,
      date: new Date('2020-10-10'),
    },
    {
      id: 2,
      title:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, adipisci?',
      amount: 5000.0,
      date: new Date('2021-07-17'),
    },
  ]);

  useEffect(() => {
    const getExpenses = JSON.parse(
      localStorage.getItem('expensetrack.expenses')
    );
    if (getExpenses !== null) setExpenses(getExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expensetrack.expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <main className='container'>
      <ExpenseForm />
      <ExpenseLists expenses={expenses} />
    </main>
  );
};

export default Main;
