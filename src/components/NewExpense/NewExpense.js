import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveExpenseData(expenseData)
        setIsEditing(false)
    }


    const startEditingHandler=()=> {
        setIsEditing(true);
    }
    const stopEditingHandler=()=> {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onStop={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}


export default NewExpense;