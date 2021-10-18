import React from 'react';
import TranList from './TranList';

function History(props) {
    
    return (
        <div className="history-container">
            <h3>History</h3>
            <ul>
                {props.items.map((data) => (
                    <TranList tranName={data.text} tranAmount={data.amount} />
                ))}
                
            </ul>
        </div>
    )
}

export default History
