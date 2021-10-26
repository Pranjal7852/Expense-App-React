import React, {useState} from 'react'
import History from './History';

function Form(props) {

    const DUMMYTRAN = [
        
    ]
    const [array, setArray] = useState(DUMMYTRAN);
    const [inputTran, setinputTran] = useState("");
    const [amountTran, setamountTran] = useState("");
    const [tranType, setTranType] = useState("expense");

    const inputHandler = (e) => {
        setinputTran(e.target.value);
        console.log(inputTran);
    }
    const addEventHandler = (e) => {
        e.preventDefault();
        let tranObject = {};
        if(tranType==="expense") {
             tranObject = {
                text: inputTran,
                amount: '- ₹'+amountTran,
                type: tranType
            }
        }
        else if (tranType==="income") {
             tranObject = {
                text: inputTran,
                amount: '+ ₹'+amountTran,
                type: tranType
            }
        }
        
        setinputTran("");
        setamountTran("");
        setArray((d) => {
            return ([...d, tranObject])
        })
        props.onaddingTran(tranObject);
    } 
    return (
        <div>
        <History items={array} />

            <h3>Add New Transaction</h3>
            <form className="form-tran">
            <label for="inputTran">Short Note </label>
            <input id="inputTran" value={inputTran} autoComplete="off" onChange={inputHandler}></input>
            <label>Amount</label>
            <input type="number" id="amountTran" autoComplete="off" step="0.01" value={amountTran} onChange={(e) => {
                setamountTran(e.target.value)
            }} ></input>
            <div className="tranType">
            <input type="radio" for="income" id="income" name="radio" value="income" onChange={()=>setTranType("income")}/>
            <label for="income" id="toggleIncome" onClick="typeofExp">INCOME</label>
            <input type="radio" for="expense" id="expense" name="radio" value="expense" onChange={()=>setTranType("expense")}/>
            <label for="expense" id="toggleExpense" onClick="typeofExp">EXPENSE</label>
            </div>
            
            <button onClick={addEventHandler}>Add Expense</button>
            </form>
        </div>
    )
}

export default Form
