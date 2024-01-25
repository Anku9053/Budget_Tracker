import React from 'react'
import {Routes, Route} from "react-router-dom";
import BudgetForm from './BudgetForm';
import BudgetTable from './BudgetTable';
import AppBurger from '../Burger/AppBurger';
const MainRoutes = () => {
  return <Routes>
    <Route path='/' element={<AppBurger/>}/>
    <Route path='/Form' element={<BudgetForm/>}/>
    <Route path='/Budget' element={<BudgetTable/>}/>
  </Routes>
}

export default MainRoutes