// components/BudgetTable.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBudget, updateBudgetFields } from '../Redux/action';
import '../Css/BudgetTable.css';

const BudgetTable = () => {
  const budgets = useSelector((state) => state.budgets);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedFields, setSelectedFields] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [updatedCategory, setUpdatedCategory] = useState('');
  const [updatedAmount, setUpdatedAmount] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [spendMoney, setSpendMoney] = useState('');
  const inputRefs = {};
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleDelete = (id) => {
    dispatch(deleteBudget(id));
  };

  const handleEdit = (id) => {
    setShowEditModal(true);
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [id]: true,
    }));

    // Separate edit count update when the user clicks on "Edit"
    const budgetToUpdate = budgets.find((b) => b.id === id);
    if (budgetToUpdate) {
      dispatch(updateBudgetFields(id, { editCount: (budgetToUpdate.editCount || 0) + 1 }));
    }
  };

  const handleUpdate = (id) => {
    const updatedFields = {};

    selectedFields.forEach((field) => {
      switch (field) {
        case 'date':
          updatedFields.date = new Date(selectedDate);
          break;
        case 'category':
          updatedFields.category = updatedCategory;
          break;
        case 'amount':
          updatedFields.amount = parseFloat(updatedAmount);
          break;
        case 'description':
          updatedFields.description = updatedDescription;
          break;
        case 'spendMoney':
          // Check if spendMoney is a valid number
          const parsedSpendMoney = parseFloat(spendMoney);
          if (!isNaN(parsedSpendMoney)) {
            updatedFields.spendMoney = parsedSpendMoney;
          }
          break;
        default:
          break;
      }
    });

    // Calculate Remaining Money
    const budget = budgets.find((b) => b.id === id);
    if (budget) {
      updatedFields.remainingMoney = budget.amount - (updatedFields.spendMoney || 0);
    }

    dispatch(updateBudgetFields(id, updatedFields));
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [id]: false,
    }));
    setShowEditModal(false);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setSelectedFields([]);
    setSelectedDate('');
    setUpdatedCategory('');
    setUpdatedAmount('');
    setUpdatedDescription('');
    setSpendMoney('');
  };

  useEffect(() => {
    Object.keys(editMode).forEach((id) => {
      if (editMode[id] && inputRefs[id]) {
        inputRefs[id].focus();
      }
    });
  }, [editMode]);

  return (
    <div>
      <table className="budget-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Spend Money</th>
            <th>Remaining Money</th>
            <th>Edit</th>
            <th>Edit Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget) => (
            <tr key={budget.id}>
              <td>
                {editMode[budget.id] && selectedFields.includes('date') ? (
                  <input
                    type="date"
                    value={selectedDate || formatDate(budget.date)}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                ) : (
                  budget.date.toDateString()
                )}
              </td>

              <td>
                {editMode[budget.id] && selectedFields.includes('category') ? (
                  <input
                    type="text"
                    placeholder="New category"
                    value={updatedCategory}
                    onChange={(e) => setUpdatedCategory(e.target.value)}
                  />
                ) : (
                  budget.category
                )}
              </td>
              <td>
                {editMode[budget.id] && selectedFields.includes('amount') ? (
                  <input
                    type="number"
                    placeholder="New amount"
                    onBlur={(e) => setUpdatedAmount(e.target.value)}
                    ref={(ref) => (inputRefs[budget.id] = ref)}
                  />
                ) : (
                  `${budget.amount.toFixed(2)}`
                )}
              </td>
              <td>
                {editMode[budget.id] && selectedFields.includes('description') ? (
                  <input
                    type="text"
                    placeholder="New description"
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                  />
                ) : (
                  budget.description || '-'
                )}
              </td>
              <td>
                {editMode[budget.id] && selectedFields.includes('spendMoney') ? (
                  <input
                    type="text"  // Use text type to allow non-numeric input
                    placeholder="Spend money"
                    value={spendMoney}
                    onChange={(e) => setSpendMoney(e.target.value)}
                  />
                ) : (
                  budget.spendMoney !== undefined ? budget.spendMoney.toFixed(2) : '0.00'
                )}
              </td>
              <td className={`remaining-money ${budget.remainingMoney < 0 ? 'negative-balance' : ''}`}>
                {editMode[budget.id] && selectedFields.includes('remainingMoney') ? (
                  <input
                    type="number"
                    placeholder="New remaining money"
                    value={budget.remainingMoney}
                    disabled
                  />
                ) : (
                  budget.remainingMoney !== undefined ? budget.remainingMoney.toFixed(2) : '-'
                )}
              </td>
              <td>
                {editMode[budget.id] && selectedFields.length > 0 ? (
                  <button onClick={() => handleUpdate(budget.id)}>Update</button>
                ) : (
                  <button onClick={() => handleEdit(budget.id)}>Edit</button>
                )}
              </td>
              <td>{budget.editCount || 0}</td>
              <td>
                <button onClick={() => handleDelete(budget.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && (
        <div className="edit-modal">
          <h2>Select The  Fields You want to Edit</h2>
          <div className='flex-div'>
          <div>

          
          <div className='EditDiv-main'>
          <label>
            <input
              type="checkbox"
              checked={selectedFields.includes('date')}
              onChange={() =>
                setSelectedFields((prevFields) =>
                  prevFields.includes('date')
                    ? prevFields.filter((field) => field !== 'date')
                    : [...prevFields, 'date']
                )
              }
            />
            Date
          </label>
          </div>
          <div className='EditDiv-main'>
          <label>
            <input
              type="checkbox"
              checked={selectedFields.includes('category')}
              onChange={() =>
                setSelectedFields((prevFields) =>
                  prevFields.includes('category')
                    ? prevFields.filter((field) => field !== 'category')
                    : [...prevFields, 'category']
                )
              }
            />
            Category
          </label>
          </div>
          <div className='EditDiv-main'>
          <label>
            <input
              type="checkbox"
              checked={selectedFields.includes('amount')}
              onChange={() =>
                setSelectedFields((prevFields) =>
                  prevFields.includes('amount')
                    ? prevFields.filter((field) => field !== 'amount')
                    : [...prevFields, 'amount']
                )
              }
            />
            Amount
          </label>
          </div>
          </div> 

          <div>
          <div className='EditDiv-main'>
          <label>
            <input
              type="checkbox"
              checked={selectedFields.includes('description')}
              onChange={() =>
                setSelectedFields((prevFields) =>
                  prevFields.includes('description')
                    ? prevFields.filter((field) => field !== 'description')
                    : [...prevFields, 'description']
                )
              }
            />
            Description
          </label>
          </div>
          <div className='EditDiv-main'>
          <label>
            <input
              type="checkbox"
              checked={selectedFields.includes('spendMoney')}
              onChange={() =>
                setSelectedFields((prevFields) =>
                  prevFields.includes('spendMoney')
                    ? prevFields.filter((field) => field !== 'spendMoney')
                    : [...prevFields, 'spendMoney']
                )
              }
            />
            Spend Money
          </label>
          </div>
          </div>
            </div>
          <div>
            
          <button onClick={handleEditModalClose}>Close</button>
          {selectedFields.length > 0 && (
            <button onClick={() => handleUpdate(selectedFields[0])}>Edit</button>
            )}
            </div>
        </div>
      )}
    </div>
  );
};

export default BudgetTable;
