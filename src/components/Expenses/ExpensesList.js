import './ExpensesList.css'
import React from 'react'
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {


    if (props.item.length === 0) {
         return <h2 className='expenses-list__fallback'> No expenses found</h2>
    }

    return (

        <ul className='expenses-list'>
            {props.item.map((expense) => {
                return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
            })}
        </ul>

    );
}

export default ExpensesList;