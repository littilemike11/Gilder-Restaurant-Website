export default function AdminPage() {
    return (
        <>

            <h1>wlecome to admin</h1>
            <div className="flex justify-center">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Username</label>
                    <input type="username" className="input" placeholder="Username" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>

        </>
    )
}