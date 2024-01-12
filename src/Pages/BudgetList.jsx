// components/BudgetList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBudget, updateBudget } from '../Redux/action';

const BudgetList = () => {
  const budgets = useSelector((state) => state.budgets);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBudget(id));
  };

  const handleUpdate = (id, newAmount) => {
    const updatedBudget = {
      id,
      budget: { amount: parseFloat(newAmount) },
    };
    dispatch(updateBudget(id, updatedBudget));
  };

  return (
    <div>
      <ul>
        {budgets.map((budget) => (
          <li key={budget.id}>
            <span>{`Budget: $${budget.amount.toFixed(2)}`}</span>
            <button onClick={() => handleDelete(budget.id)}>Delete</button>
            <input
              type="number"
              placeholder="New amount"
              onChange={(e) => handleUpdate(budget.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;
