import React, { useState,useEffect } from "react";
import Expense from "./Expense";
import TransactionHistory from "./TransactionHistory";
import Transactionform from "./Transactionform";
import { uniqueId } from "../utils";


function ExpenseTracker(){

    const [income,setIncome]=useState(0);
    const [expense,setExpense]=useState(0);
    const [transactions,setTransactions]=useState([]);
    useEffect(()=>{
        let localState = JSON.parse(localStorage.getItem('expenseTrackerState'))
        if(localState){
            setTransactions(localState)

        }
        else{
            calculateExpenses();
        }
       
    },[]);

    useEffect(()=>{
        calculateExpenses();
    },[transactions]);

    const saveState = ()=>{
        localStorage.setItem('expenseTrackerState',JSON.stringify(transactions))
    }

    const calculateExpenses=()=>{
        let income =0, expense=0;
        console.log("transactiondata",transactions)
        transactions.forEach((item)=>{
            if(item.type === 'income'){
                income+=item.amount;
            }
            else if(item.type === 'expense'){
                expense+=item.amount;
            }
        });
       saveState();
        setIncome(income);
        setExpense(expense);
      
    }
   

    const handleAddNewTransaction = item=>{
        let newTransaction =[...transactions,item]
        console.log("newTransaction",newTransaction)
        setTransactions(newTransaction)
        
    }

    const handleDeleteTransaction=id=>{
        const newTransactions  = transactions.filter((item)=>item.id !=id)
        setTransactions(newTransactions)

        
    }
    return(
        <div className="tracker">
            <h1 className="htracker"> Expense Tracker</h1>
            <Expense income={income}expense={expense}/>
            <Transactionform onNewTransaction = {handleAddNewTransaction}/>
            <TransactionHistory transactions={transactions} onDeleteTransaction={handleDeleteTransaction}/>
           
        </div>
    )
}

export default ExpenseTracker;