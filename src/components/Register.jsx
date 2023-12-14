import { NavLink } from "react-router-dom";

export default function Register() {
    return (
        <div className="bg-blue-500 h-screen flex items-center justify-center">
            <form>
                <div className="bg-blue-300/60 flex flex-col rounded-lg px-8 py-7 w-96">
                    <h1 className="text-3xl text-center mb-8 font-semibold">Register</h1>
                    <label className="mb-1 ml-1" htmlFor="userName">User Name</label>
                    <input className="mb-3 px-3 py-2 rounded-lg outline-none" id="userName" type="text" placeholder="Name" />
                    <label className="mb-1 ml-1" htmlFor="password">Password</label>
                    <input className="mb-8 px-3 py-2 rounded-lg outline-none" id="password" type="password" placeholder="Password" />
                    <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 mx-auto mb-4 text-white" type="submit">Register</button>
                    <label className="mb-1 ml-1 text-black hover:text-blue-800  hover:underline"><NavLink to="/login">Already have an account?</NavLink></label>
                </div>
            </form>
        </div>
    )
}
