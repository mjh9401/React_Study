import React, { Component } from 'react'
import './ExpenseLIst.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

export class ExpenseLIst extends Component {
  render() {
    //console.log(this.props.initailExpenses);
    return (
        <>
            <ul className='list'>
                {/* ExpenseItem */}
                {this.props.initailExpenses.map(expense =>{
                    return(
                        <ExpenseItem expense={expense} key={expense.id}
                            handleDelete={this.props.handleDelete}
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
}

export default ExpenseLIst