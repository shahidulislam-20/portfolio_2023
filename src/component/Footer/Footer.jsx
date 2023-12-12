import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';


const Footer = () => {
    return (
        <div className="flex md:flex-row flex-col gap-5 items-center justify-between max-w-7xl mx-auto py-5 border-t-2">
            <h3>&copy; SHAHIDUL 2023 | All Rights Reserved.</h3>
            <Link to="/" className='flex items-center'>
                <img className='h-12 w-12' src={logo} alt="logo" />
                <h3 className='font-bold text-3xl'>SHAHIDUL</h3>
            </Link>
        </div>
    );
};

export default Footer;