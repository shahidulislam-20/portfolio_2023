import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Md Shahidul Islam</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Education></Education>
            <Experience></Experience>
        </div>
    );
};

export default Home;