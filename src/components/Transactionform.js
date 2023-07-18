import React , {useState} from "react";
import { uniqueId } from "../utils";


function Transactionform({onNewTransaction}){

    const [nameValue,setNameValue]=useState('');
    const [amountValue,setAmountValue]=useState('');

    const addTransaction = (type,method,evt)=>{
        evt.preventDefault();
        const data =   { id:uniqueId(),name:new Date().toLocaleString(),amount:parseInt(amountValue),type:type,method:method};
        onNewTransaction(data);
        setNameValue('')
        setAmountValue('')
    }
    return(
        <div style={{border:"1px solid black" , margin:"5px",padding:"20px"}}>
           

            <form >
                {/* <label>
                    Name
              
                <div>
                    <input type="text" value={nameValue}  onChange={(e)=>setNameValue(e.target.value)} />
                   
                </div>
                </label> */}
                <label style={{fontSize:"25px"}}>
                    Amount:
                <div>
                    <input className="am-tracker" type="number" value={amountValue} onChange={(e)=>setAmountValue(e.target.value)}/>
                </div>
                </label>
                <div>
                    <button className="a-tracker" onClick={(e)=>addTransaction('income','ADD',e)}>Add</button>
                    <button className="r-tracker" onClick={(e)=>addTransaction('expense','Remove',e)}>Remove</button>
                </div>
            </form>
        </div>
    )
}


export default Transactionform;