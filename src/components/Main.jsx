import React, { useState, useEffect } from 'react';
import ExpenseForm from './expenseform/ExpenseForm';
import ExpenseLists from './expenses/ExpenseLists';

const Main = () => {
  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    const getExpensesJSON = localStorage.getItem('expensetrack.expenses');
    console.log('[]');
    // return;
    if (getExpensesJSON != 'null') {
      const getExpenses = JSON.parse(getExpensesJSON);
      const newExpenses = [];
      for (const expense of getExpenses) {
        const parsedDate = new Date(expense.date);
        newExpenses.push({ ...expense, date: parsedDate });
      }
      setExpenses((previousExpenses) => {
        previousExpenses = newExpenses;
      });
      localStorage.setItem(
        'expensetrack.expenses',
        JSON.stringify(newExpenses)
      );
    } else {
      localStorage.setItem('expensetrack.expenses', JSON.stringify(expenses));
    }
  }, []);

  useEffect(() => {
    console.log('[expenses]');
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
