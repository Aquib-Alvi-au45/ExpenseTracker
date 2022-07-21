import './Expenses.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2020")

    function filterChangeHandler(selectedYear) {
        setFilterYear(selectedYear);
    }
    const filteredExpenses = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    })





    return (
        <li>

            <Card className='expenses'>
                <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList item={filteredExpenses} />
            </Card>
        </li>
    )

}

export default Expenses