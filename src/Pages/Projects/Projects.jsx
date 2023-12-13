import { Helmet } from "react-helmet-async";
import glozzom from '../../assets/projects/glozzom1.png';
import mizuxe from '../../assets/projects/mizuxe1.png';
import quotes from '../../assets/projects/quotes1.png';
import unfold from '../../assets/projects/unfold1.png';
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
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-0 px-5 gap-20">
                    <Link className="bg-bg-prime cursor-pointer" to="/project-details/1">
                        <img className="w-full" src={glozzom} alt="photo" />
                        <h3 className="text-text-prime font-bold text-2xl p-5 flex items-center gap-5">Glozzom <FaAngleRight></FaAngleRight></h3>
                    </Link>
                    <Link className="bg-bg-prime cursor-pointer" to="/project-details/2">
                        <img className="w-full" src={mizuxe} alt="res" />
                        <h3 className="text-text-prime font-bold text-2xl p-5 flex items-center gap-5">Mizuxe <FaAngleRight></FaAngleRight></h3>
                    </Link>
                    <Link className="bg-bg-prime cursor-pointer" to="/project-details/3">
                        <img className="w-full" src={quotes} alt="auto" />
                        <h3 className="text-text-prime font-bold text-2xl p-5 flex items-center gap-5">Quotes <FaAngleRight></FaAngleRight></h3>
                    </Link>
                    <Link className="bg-bg-prime cursor-pointer" to="/project-details/4">
                        <img className="w-full" src={unfold} alt="career" />
                        <h3 className="text-text-prime font-bold text-2xl p-5 flex items-center gap-5">Portfolio <FaAngleRight></FaAngleRight></h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;