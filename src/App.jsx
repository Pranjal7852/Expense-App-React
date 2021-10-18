import React from 'react';
import Balance from "./components/balance";
import Expense from "./components/expense";
import Header from "./components/header";
import Form from './components/Form';

import "./App.css"

const App = () => {
  
  
  return (
    <div className="container">
      <Header />
      <Balance />
      <Expense />
      <Form />
      
    </div>

  ) 
} 

export default App;
