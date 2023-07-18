import React from "react";


function TransactionHistory({ transactions,onDeleteTransaction}) {
    return (
        <div style={{border:"1px solid black", padding:"20px",margin:"15px"}}>
            <h2>Transactions History:</h2><ul>{
                transactions.map((data) =>
                    // <li key={data.id}>{data.name} {data.amount} <button onClick={()=>onDeleteTransaction(data.id)}> x </button></li>
                    <li key={data.id}>{data.name}-{data.amount}-{data.method}</li>

                )
            }
            </ul>
        </div>
    )
}

export default TransactionHistory;