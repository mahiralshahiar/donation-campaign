import { NavLink } from "react-router-dom";
import './Navbar.css'


const NavBar = () => {
    const Links = <>
        <li className="nav-link "><NavLink to="/">Home</NavLink></li>
        <li className="nav-link"><NavLink to="/donation">Donation</NavLink></li>
        <li className="nav-link"><NavLink to="/statistics">Statistics</NavLink></li>

    </>
    const navColor = "#FF444A"

    return (


        <div className="navbar  flex justify-between max-w-7xl mx-auto py-5">


            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-bold text-lg menu-sm dropdown-content mt-3 z-[1] p-2 shadow   rounded-box w-52 border-none">
                        {Links}
                    </ul>
                </div>
                <figure><img src="https://i.ibb.co/875Zv5Y/Logo.png" alt="" /></figure>

            </div>


            <div className=" hidden lg:flex">
                <ul className=" menu-horizontal px-1 gap-12 font-bold text-lg " >
                    {Links}
                </ul>
            </div>

        </div>


    );
};

export default NavBar;