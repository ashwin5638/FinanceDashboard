import { useState } from "react"
import './index.css'

const Navbar = () => {
     const [ role, setRole] = useState("Admin");

    const onRoleChange = (event) => {
        setRole(event.target.value)
     }

    return (
        <nav className="logo">
            <h1>Finance Flow</h1>
            <div className="Nav-bar">
                <span>
                    Current Role: 
                </span>
                <select
                    id="role-select"
                    value={role}
                    className="role-selector"
                    onChange={onRoleChange}
                >
                    <option value="Admin">Admin (Full Access)</option>
                    <option value="Viewer">Viewer (Read Only)</option>
                </select>
            </div>
        </nav>
    )
}

export default Navbar