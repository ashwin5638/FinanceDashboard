import { useFinance } from "../Context/financeContext"


const SummaryCard = () => {

     const {state} = useFinance()
     
     const totalIncome = state.transactions
     .filter((item) => item.type === "Income")
     .reduce((sum, item) => sum + item.amount,0)


     const totalExpense = state.transactions
     .filter((item) => item.type === "Expense")
     .reduce((sum, item) => sum + item.amount,0)

     const totalBalance = totalIncome - totalExpense

    return (
         <div className="Summary-card">
                <div className="card summary-item total-balance">
                    <h2>Total Balance</h2>
                    <p>${totalBalance.toLocaleString()}</p>
                </div>
                <div className="card summary-item total-income">
                    <h2>Total Income</h2>
                    <p>${totalIncome.toLocaleString()}</p>
                </div>
                <div className="card summary-item total-expense">
                    <h2>Total Expenses</h2>
                    <p>${totalExpense.toLocaleString()}</p>
                </div>
            </div>
    )
}


export default SummaryCard