import React from 'react';

function TransactionList({ transactions, onDeleteTransaction }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID');
  };

  if (transactions.length === 0) {
    return (
      <section className="list-section">
        <h2>Transactions</h2>
        <p className="empty-state">No transactions yet. Add one to get started!</p>
      </section>
    );
  }

  return (
    <section className="list-section">
      <h2>Transactions</h2>
      <div className="table-wrapper">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="transaction-desc">
                  {transaction.description}
                </td>
                <td data-label="Category">
                  {transaction.category}
                </td>
                <td
                  data-label="Type"
                  className={transaction.type.toLowerCase()}
                >
                  {transaction.type}
                </td>
                <td
                  data-label="Amount"
                  className={`amount ${transaction.type.toLowerCase()}`}
                >
                  {transaction.type === 'Income' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </td>
                <td data-label="Date">
                  {formatDate(transaction.date)}
                </td>
                <td data-label="Action" className="transaction-action">
                  <button
                    className="btn-delete"
                    onClick={() => onDeleteTransaction(transaction.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TransactionList;
