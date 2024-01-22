import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbr = () => {
    const { user, logOut } = useContext(AuthContext);
    const handaleLogout = () => {
        logOut()
            .then(() => {
                localStorage.removeItem("jwt-token-secret")
            })
            .then(error => {
                console.log(error)
            })

    }
    const navItems = <>
        <li className="font-bold"><Link to="/">HOME</Link></li>
        <li className="font-bold"><Link to="/about">ABOUT</Link></li>
        <li className="font-bold"><Link to="/services">SERVICES</Link></li>
        <li className="font-bold"><Link to="/contact">CONTACT</Link></li>
        {user ? <><li className="font-bold text"><Link to="/booking">MY-BOOKING</Link></li></> : ""}
    </>
    return (

        <div className="navbar bg-base-100  mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}

                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost font-extrabold text-xl"><h1>BIKE-<span className="text-orange-600">SERVICES</span></h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>

            </div>
            <div className="navbar-end">
                {user ? <button className="btn text-gray-500 font-bold" onClick={handaleLogout}>LogOut</button> : <Link to="/login" className="btn text-gray-500 font-bold">LOGIN</Link>}
            </div>

        </div>

    );
};

export default Navbr;