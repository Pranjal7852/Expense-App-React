import React from 'react';
import Balance from "./components/balance";
import Expense from "./components/expense";
import Header from "./components/header";
import Form from './components/Form';

import "./App.css"

const App = () => {
   const calcTran = (data) => {
    
   } 
  
  return (
    <div className="container">
      <Header />
      <Balance />
      <Expense />
      <Form onaddingTran={calcTran} />
      
    </div>

  ) 
} 

export default App;
