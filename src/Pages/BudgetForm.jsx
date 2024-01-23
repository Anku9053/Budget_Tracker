import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBudget } from '../Redux/action';
import BudgetDatePicker from './DatePicker';
import '../Css/BudgetForm.css';

const BudgetForm = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [customCategory, setCustomCategory] = useState('');
  const [customSubcategory, setCustomSubcategory] = useState('');
  const [dynamicSubcategories, setDynamicSubcategories] = useState([]);

  const hardcodedData = {
    food: ['Beverages', 'Meals', 'Snacks'],
    travel: ['Flights', 'Hotels', 'Transportation'],
    entertainment: ['Movies', 'Concerts', 'Events'],
  };

  const getDynamicSubcategories = (inputCategory) => {
    const dynamicSubs = hardcodedData[inputCategory] || [];
    setDynamicSubcategories(dynamicSubs);
    return dynamicSubs;
  };

  useEffect(() => {
    setDynamicSubcategories(getDynamicSubcategories(category));
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((!category || category === 'other') && !customCategory) {
      alert('Please fill in the category field before submitting.');
      return;
    }

    if ((!subcategory || subcategory === 'other') && !customSubcategory) {
      alert('Please fill in the subcategory field before submitting.');
      return;
    }

    if (!amount || !selectedDate) {
      alert('Please fill in all the fields before submitting.');
      return;
    }

    const newBudget = {
      id: new Date().getTime().toString(),
      category: category === 'other' ? customCategory : category,
      subcategory: subcategory === 'other' ? customSubcategory : subcategory,
      amount: parseFloat(amount),
      date: selectedDate,
    };

    dispatch(addBudget(newBudget));

    // Reset form state
    setCategory('');
    setSubcategory('');
    setCustomCategory('');
    setCustomSubcategory('');
    setAmount('');

    const shouldOpenForm = window.confirm('Do you want to add more budgets?');

    if (shouldOpenForm) {
      setIsFormOpen(true);
    } else {
      setIsFormOpen(false);
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
  
    // Always set the selected category
    setCategory(selectedCategory);
  
    // Keep the form open
    setIsFormOpen(true);
  };
  
  const handleSubcategoryChange = (e) => {
    const selectedSubcategory = e.target.value;
    setSubcategory(selectedSubcategory);
    console.log(selectedSubcategory)
  
    // Keep the form open if either the category or subcategory is "Write it by own" and the respective custom input is not filled
    setIsFormOpen(true);

    console.log("categoryis",category)

    if(category=="food"){
      console.log("truee")
    }
    // if(category=="other"){
    //   setIsFormOpen(true);
    // }
  };


  const handleCategoryBlur = () => {
    if (!(category === 'other' && !customCategory)) {
      // Close the form only if it's not "Write it by own (category)" or the input is filled
      setIsFormOpen(false);
    }
  };

  return (
    <div>
      {isFormOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsFormOpen(false)}>
              &times;
            </span>
            <form className="expense-form" onSubmit={handleSubmit}>
              <label>
                Category:
                <select
                  className="input"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select a category</option>
                  <option value="food">Food</option>
                  <option value="travel">Travel</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Write it by own (category)</option>
                </select>
                {category === 'other' && (
                  <input
                    className="input"
                    type="text"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    onBlur={handleCategoryBlur}
                  />
                )}
              </label>

              {category && (
                <label>
                  Subcategory:
                  <select
                    className="input"
                    value={subcategory}
                    onChange={handleSubcategoryChange}
                  >
                    <option value="">Select a subcategory</option>
                    {dynamicSubcategories.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                    <option value="other">Write it by own (subcategory)</option>
                  </select>
                  {subcategory === 'other' && (
                    <input
                      className="input"
                      type="text"
                      value={customSubcategory}
                      onChange={(e) => setCustomSubcategory(e.target.value)}
                    />
                  )}
                </label>
              )}

              <label>
                Amount:
                <input
                  className="input"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </label>
              <label>Date:</label>
              <BudgetDatePicker
                className="datepicker"
                selectedDate={selectedDate}
                handleDateChange={setSelectedDate}
              />
              <button className="button" type="submit">
                Add Budget
              </button>
            </form>
          </div>
        </div>
      )}

      {!isFormOpen && (
        <button onClick={() => setIsFormOpen(true)}>Create Form</button>
      )}
    </div>
  );
};

export default BudgetForm;