import React from 'react'

const Expense = () => {
    return (
        <div className="expense-container">
            <div className="income">
                INCOME
                <span className="income-amount">+$0.00</span>
            </div>
            <div className="expense">
                EXPENSE
                <span className="expense-amount">-$0.00</span>
            </div>
        </div>
    )
}

export default Expense;
