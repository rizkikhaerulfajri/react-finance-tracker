import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Food',
    type: 'Expense',
    date: new Date().toISOString().split('T')[0],
  });

  const categories = {
    Expense: ['Food', 'Transport', 'Housing', 'Entertainment', 'Health', 'Other'],
    Income: ['Salary', 'Freelance', 'Investment', 'Other'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Reset category when type changes
      if (name === 'type') {
        updated.category = categories[value][0];
      }
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData);
    // Reset form
    setFormData({
      description: '',
      amount: '',
      category: 'Food',
      type: 'Expense',
      date: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <section className="form-section">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <input
            id="description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="e.g., Lunch at restaurant"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount (IDR) *</label>
          <input
            id="amount"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0"
            min="1"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="type">Type *</label>
            <select id="type" name="type" value={formData.type} onChange={handleChange}>
              <option value="Expense">Expense</option>
              <option value="Income">Income</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories[formData.type].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date *</label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          Add Transaction
        </button>
      </form>
    </section>
  );
}

export default TransactionForm;
