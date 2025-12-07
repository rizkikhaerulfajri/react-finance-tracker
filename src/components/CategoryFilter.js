import React from 'react';

function CategoryFilter({ onFilterCategory, onFilterMonth, transactions }) {
  const categories = ['All', ...new Set(transactions.map((t) => t.category))];
  const months = [
    'All',
    ...new Set(
      transactions.map((t) =>
        new Date(t.date).toLocaleString('id-ID', { month: 'long', year: 'numeric' })
      )
    ),
  ];

  return (
    <section className="filter-section">
      <h2>Filter Transactions</h2>
      <div className="filter-group">
        <div className="filter-item">
          <label htmlFor="categoryFilter">Category:</label>
          <select
            id="categoryFilter"
            onChange={(e) => onFilterCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="monthFilter">Month:</label>
          <select id="monthFilter" onChange={(e) => onFilterMonth(e.target.value)}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

export default CategoryFilter;
