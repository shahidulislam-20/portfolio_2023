import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaAnglesRight } from "react-icons/fa6";

const Navbar = () => {

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>

    return (
        <div className="bg-bg-prime">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className='flex items-center'>
                        <img className='h-12 w-12' src={logo} alt="logo" />
                        <h3 className='font-bold text-3xl'>SHAHIDUL</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='flex items-center gap-2 btn hover:text-white bg-text-prime text-black py-3 px-6 rounded-full' to="/contact">
                        <p>Hire Me</p>
                        <FaAnglesRight></FaAnglesRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;