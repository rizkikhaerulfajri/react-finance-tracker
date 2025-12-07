import React from 'react';

function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === 'Income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === 'Expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  const balance = income - expenses;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="summary">
      <div className="summary-card income">
        <h3>Total Income</h3>
        <p className="amount">{formatCurrency(income)}</p>
      </div>
      <div className="summary-card expense">
        <h3>Total Expenses</h3>
        <p className="amount">{formatCurrency(expenses)}</p>
      </div>
      <div className="summary-card balance">
        <h3>Balance</h3>
        <p className="amount">{formatCurrency(balance)}</p>
      </div>
    </section>
  );
}

export default Summary;
