import React, { useState, useEffect } from 'react';
import ExpenseForm from './expenseform/ExpenseForm';
import ExpenseLists from './expenses/ExpenseLists';

const Main = () => {
  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    const getExpenses = JSON.parse(
      localStorage.getItem('expensetrack.expenses')
    );
    if (getExpenses != null) {
      console.log(getExpenses);
      const newExpenses = [];
      for (const expense of getExpenses) {
        const parsedDate = new Date(expense.date);
        newExpenses.push({ ...expense, date: parsedDate });
      }
      setExpenses((previousExpenses) => {
        previousExpenses = newExpenses;
      });
      console.log(expenses);
    } else {
      localStorage.setItem('expensetrack.expenses', JSON.stringify(expenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expensetrack.expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addNewExpenseHandler = (newExpense) => {
    setExpenses((previousExpenses) => {
      if (previousExpenses != null) {
        return [...previousExpenses, newExpense];
      }
      return [newExpense];
    });
  };

  return (
    <main className='container'>
      <ExpenseForm addNewExpense={addNewExpenseHandler} />
      {expenses && <ExpenseLists expensesList={expenses} />}
    </main>
  );
};

export default Main;
