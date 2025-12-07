import React, { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterMonth, setFilterMonth] = useState('All');

  // Add transaction
  const handleAddTransaction = (newTransaction) => {
    if (!newTransaction.amount || newTransaction.amount <= 0) {
      alert('Amount must be greater than 0!');
      return;
    }
    if (!newTransaction.description.trim()) {
      alert('Description is required!');
      return;
    }
    setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
    alert('Transaction added successfully!');
  };

  // Delete transaction
  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
    alert('Transaction deleted!');
  };

  // Filter transactions
  const filteredTransactions = transactions.filter((t) => {
    const categoryMatch = filterCategory === 'All' || t.category === filterCategory;
    const monthMatch = filterMonth === 'All' || new Date(t.date).toLocaleString('id-ID', { month: 'long', year: 'numeric' }) === filterMonth;
    return categoryMatch && monthMatch;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>💰 Finance Tracker</h1>
        <p>Manage your personal finances with ease</p>
      </header>

      <main className="app-main">
        <Summary transactions={transactions} />
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <CategoryFilter
          onFilterCategory={setFilterCategory}
          onFilterMonth={setFilterMonth}
          transactions={transactions}
        />
        <TransactionList
          transactions={filteredTransactions}
          onDeleteTransaction={handleDeleteTransaction}
        />
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Finance Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
