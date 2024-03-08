import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseLIst from "./components/ExpenseLIst";
import Alert from "./components/Alert";


const App = ()=> { 
  // state
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [expense,setExpense] = useState(
    [
      {id : 1, charge:"렌트비", amount: 1600},
      {id : 2, charge:"교통비", amount: 400},
      {id : 3, charge:"식비", amount: 1200},
    ]
  )
  const [alert, setAlert] = useState({show:false});


  const handleDelete = (id)=>{
    const newExpenses = expense.filter(expense => expense.id !== id);
    console.log(newExpenses);
    setExpense(newExpenses);
    handleAlert({type:"danger", text:"아이템이 삭제되었습니다."});
  }

  const handleChange = (e)=>{
      console.log(e.target.value);
      setCharge(e.target.value);
  }

  const handleAmount =(e)=>{
    setAmount(e.target.valueAsNumber);
  }

  const handleSubmit = (e)=>{
    e.preventDefault(); // submit 기본동작 막음
    
    if(charge !== "" && amount >0){
        const newExpense = {id : crypto.randomUUID(), charge:charge, amount:amount};

        // 불편성을 지켜주기 위해서 새로운 expenses를 생성
        const newExpenses = [...expense, newExpense];
        setExpense(newExpenses);
        setCharge("");
        setAmount(0);
        handleAlert({type:"success", text:"아이템이 생성되었습니다."});
    }else{
      console.log("error");
      handleAlert({type:"danger", text:"charge는 빈 값일 수 없으며 amount는 0보다 커야합니다."});
    }
  }

  const handleAlert = ({type,text})=>{
    setAlert({show:true, type, text});
    setTimeout(() => {
      setAlert({show:false});
    }, 7000);
  }

  return(
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text}/>:null}
      <h1>예산 계산기</h1>

      <div style={{width:'100%', backgroundColor:'white',padding:'1rem'}}>
        {/* Expense Form */}
        <ExpenseForm 
          handleChange = {handleChange}
          charge = {charge}
          handleAmout={handleAmount}
          amount={amount}
          handleSubmit = {handleSubmit}/>
      </div>
      <div style={{width:'100%', backgroundColor:'white',padding:'1rem'}}>
        {/* Expense List */}
        <ExpenseLIst 
          initailExpenses={expense}
          handleDelete={handleDelete}/>
      </div>
      
      <div style={{display:'flex', justifyContent:'end', marginTop:'1rem'}}>
        <p style={{fontSize:'2rem'}}>
          총지출:
          <span>원</span>
        </p>
      </div>
    </main>
  )
}

export default App;
