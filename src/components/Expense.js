import React from "react";


function Expense({income,expense}){
    return(
        <div >
            <div>
            <h4 style={{fontSize:"25px",marginTop:"5px"}}> Your Balance :{income-expense}</h4>
            </div>
            <div>
            {/* <div>
                <h4>Income</h4>
                <div>{income}</div>
            </div>
            <div>
                <h4>expense</h4>
                <div>{expense}</div>
            </div> */}
            </div>
        </div>
    )
}


export default Expense;