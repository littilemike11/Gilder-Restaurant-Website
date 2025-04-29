import { useState } from "react"
import Dashboard from "./components/Dashboard"
export default function AdminPage() {
    const [isLogin, setIsLogin] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const adminUsername = import.meta.env.VITE_USERNAME;
    const adminPassword = import.meta.env.VITE_PASSWORD;
    const [wrongCredentials, setWrongCredentials] = useState(false)
    const login = () => {
        if (!username) return;
        if (!password) return;
        if (username == adminUsername && password == adminPassword) {
            setIsLogin(true)
        } else {
            setWrongCredentials(true)
        }
    }
    return (
        <>
            {isLogin ?
                <Dashboard /> :
                <div className="h-dvh flex justify-center items-center">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Login</legend>

                        <label className="label">Username</label>
                        <input type="text" min={1} required className="input validator" onChange={(e) => { setUsername(e.target.value); setWrongCredentials(false) }} placeholder="Username" />
                        <p className="validator-hint">Please enter Username</p>

                        <label className="label">Password</label>
                        <input type="password" min={1} required className="input validator" onChange={(e) => { setPassword(e.target.value); setWrongCredentials(false) }} placeholder="Password" />
                        <p className="validator-hint">Please enter Password</p>
                        {wrongCredentials && (
                            <div className="p-2">
                                <span className="badge badge-error">
                                    Wrong Username or Password
                                </span>
                            </div>
                        )}
                        <button onClick={login} className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>}

        </>
    )
}