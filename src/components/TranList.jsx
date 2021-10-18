import React from 'react'

function TranList(props) {
    return (
        <li className="expenseTran">
        <div>{props.tranName}</div> <span className="amount">{props.tranAmount}</span><button className="remove-btn">X</button>
        </li>
    )
}

export default TranList
