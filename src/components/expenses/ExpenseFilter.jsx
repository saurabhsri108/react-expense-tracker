import React from 'react';

const ExpenseFilter = () => {
  return (
    <section className='expense-filter-container'>
      <label htmlFor='filter-date'>Filter</label>
      <select name='filter-date' id='filter-date'>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
      </select>
    </section>
  );
};

export default ExpenseFilter;
