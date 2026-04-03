import Navbar from "../Navbar"
import SummaryCard from "../SummaryCard"
import Transaction from "../Transaction"
import FinanceChart from "../financeChart"
import "../index.css"

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="dashboard-container">
                <SummaryCard />
                <FinanceChart />
                <Transaction />
            </div>
        </div>
    )
}

export default Dashboard