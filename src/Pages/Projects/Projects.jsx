import { Helmet } from "react-helmet-async";
import diagImg from '../../assets/projects/diagnostic-center.png';
import resImg from '../../assets/projects/restaurant.png';
import autoImg from '../../assets/projects/automobile-shop.png';
import careerImg from '../../assets/projects/job-hunting-website.png';
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <Helmet>
                <title>Projects | Md Shahidul Islam</title>
            </Helmet>
            <div className="bg-bg-prime py-20">
                <h2 className="font-bold text-5xl text-center text-white uppercase">My Portfolio</h2>
            </div>
            <div className="max-w-7xl mx-auto py-28">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-0 px-5 gap-5">
                    <Link className="bg-bg-prime cursor-pointer" to="/project-details/1">
                        <img src={diagImg} alt="photo" />
                        <h3 className="text-text-prime font-bold text-2xl p-5 flex items-center gap-5">Diagnostic Center Website <FaAngleRight></FaAngleRight></h3>
                    </Link>
                    <Link className="bg-bg-prime cursor-pointer" to="/project-details/2">
                        <img src={resImg} alt="res" />
                        <h3 className="text-text-prime font-bold text-2xl p-5 flex items-center gap-5">Restaurant Website <FaAngleRight></FaAngleRight></h3>
                    </Link>
                    <Link className="bg-bg-prime cursor-pointer" to="/project-details/3">
                        <img src={autoImg} alt="auto" />
                        <h3 className="text-text-prime font-bold text-2xl p-5 flex items-center gap-5">Automobile Shop Website <FaAngleRight></FaAngleRight></h3>
                    </Link>
                    <Link className="bg-bg-prime cursor-pointer" to="/project-details/4">
                        <img src={careerImg} alt="career" />
                        <h3 className="text-text-prime font-bold text-2xl p-5 flex items-center gap-5">Job Hunting Website <FaAngleRight></FaAngleRight></h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;