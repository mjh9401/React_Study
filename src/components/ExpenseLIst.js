import React from 'react'
import './ExpenseLIst.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseLIst = ({expense,handleDelete,handleEdit,clearItem})=>{
    return (
        <>
            <ul className='list'>
                {/* ExpenseItem */}
                {expense.map(expense =>{
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
            {expense.length > 0 && (
                <button className='btn' onClick={clearItem}>
                    목록지우기
                    <MdDelete className='btn-icon'/>
                </button>
            )}
        </>
    )
}

export default ExpenseLIst