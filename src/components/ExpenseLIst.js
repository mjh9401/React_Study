import React from 'react'
import './ExpenseLIst.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseLIst = ({initailExpenses,handleDelete,handleEdit})=>{
    return (
        <>
            <ul className='list'>
                {/* ExpenseItem */}
                {initailExpenses.map(expense =>{
                    return(
                        <ExpenseItem 
                            expense={expense} 
                            key={expense.id}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    )
                })}
            </ul>
            <button className='btn'>
                목록지우기
                <MdDelete className='btn-icon'/>
            </button>
        </>
    )
}

export default ExpenseLIst