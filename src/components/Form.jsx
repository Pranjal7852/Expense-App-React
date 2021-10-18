import React, {useState} from 'react'
import History from './History';

function Form(props) {

    const DUMMYTRAN = [
        {
            text: "Food",
            amount: -20
        },
        {
            text: "Travel",
            amount: -50
        },
        {
            text: "Pocket Money",
            amount: +10
        }
    ]
    const [array, setArray] = useState(DUMMYTRAN);
    const [inputTran, setinputTran] = useState("");
    const [amountTran, setamountTran] = useState("");

    const inputHandler = (e) => {
        setinputTran(e.target.value);
        console.log(inputTran);
    }
    const addEventHandler = (e) => {
        e.preventDefault();
        const tranObject = {
            text: inputTran,
            amount: '$'+amountTran
        }
        setinputTran("");
        setamountTran("");
        setArray((d) => {
            return ([...d, tranObject])
        })
    } 
    return (
        <div>
        <History items={array} />

            <h3>Add New Transaction</h3>
            <form className="form-tran">
            <label for="inputTran">Text</label>
            <input id="inputTran" value={inputTran} autoComplete="off" onChange={inputHandler}></input>
            <label>Amount</label>
            <input type="number" id="amountTran" value={amountTran} onChange={(e) => {
                setamountTran(e.target.value)
            }} ></input>
            <button onClick={addEventHandler}>Add Expense</button>
            </form>
        </div>
    )
}

export default Form
