import { useState } from "react"
import { useFinance } from "../Context/financeContext"

const Transaction = () => {
    const { state, dispatch } = useFinance();
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        type: 'Income',
        category: '',
        date: new Date().toISOString().split('T')[0]
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.amount) return;

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                ...formData,
                id: Date.now(),
                amount: parseFloat(formData.amount)
            }
        });
        setFormData({
            title: '',
            amount: '',
            type: 'Income',
            category: '',
            date: new Date().toISOString().split('T')[0]
        });
    };

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    };

    
    return (
        <div className="transaction-container">
            <div className="card recent-trans">
                <h1 className="transaction-section-title">Recent Transactions</h1>
                <ul className="transaction-list">
                    {state.transactions.map((t) => (
                        <li key={t.id} className="transaction-item">
                            <div>
                                <strong className="transaction-title">{t.title}</strong>
                                <div className="transaction-meta">
                                    {t.category} • {t.date}
                                </div>
                            </div>
                            <div className="transaction-actions">
                                <span className={`transaction-amount ${t.type === 'Income' ? 'income' : 'expense'}`}>
                                    {t.type === 'Income' ? '+' : '-'}${t.amount.toLocaleString()}
                                </span>
                                <button className="delete-btn" onClick={() => handleDelete(t.id)}>×</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="card add-container">
                <h3 className="transaction-section-title">Add Transaction</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Salary" />
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input name="amount" type="number" value={formData.amount} onChange={handleChange} placeholder="0.00" />
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <select name="type" value={formData.type} onChange={handleChange}>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input name="category" value={formData.category} onChange={handleChange} placeholder="e.g. Food" />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input name="date" type="date" value={formData.date} onChange={handleChange} />
                    </div>
                    <button type="submit" className="add-transaction-btn">Add Transaction</button>
                </form>
            </div>
        </div>
    )
}

export default Transaction