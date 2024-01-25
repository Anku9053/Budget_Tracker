import './App.css';

import React from 'react';
import BudgetTable from './Pages/BudgetTable';
import FormSample from './Pages/FormSample';
import BudgetList from './Pages/BudgetList';
import BudgetForm from './Pages/BudgetForm';
import AppBurger from './Burger/AppBurger';
import MainRoutes from './Pages/MainRoutes';
function App() {

  return (
    <div className='App'>
      {/* <MainRoutes/> */}
      <AppBurger/>
      <BudgetForm/>
      <BudgetTable/>
    </div>
  );
}

export default App;
