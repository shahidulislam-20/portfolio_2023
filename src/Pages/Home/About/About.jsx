import { FaDownload, FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import aboutImg from '../../../assets/about.jpg';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto py-10 px-5 lg:px-0 my-28">
            <div className='flex lg:flex-row flex-col lg:gap-28 gap-10'>
                <div>
                    <img className='w-96 shadow-sm mx-auto shadow-text-prime' src={aboutImg} alt="photo" />
                </div>
                <div className='flex-1 lg:text-justify text-center'>
                    <h2 className='text-text-prime text-2xl font-bold uppercase'>About Me</h2>
                    <hr className='w-28 mb-20 lg:mx-0 mx-auto'/>
                    <p className='text-justify'>Hi, I&apos;m Shahidul, a Junior MERN Stack Web Developer passionate about crafting seamless digital experiences. From dynamic React interfaces to server-side magic with Node.js and MongoDB, I thrive on creating efficient, user-centric solutions. A dedicated problem solver, I approach coding as an art of elegant problem-solving. Always in pursuit of knowledge, I stay on the cutting edge of technology, ensuring that my skills are not just up-to-date but finely honed. Explore my portfolio to see firsthand how my commitment to quality and functionality shines through every line of code. Eager to take on new challenges and contribute to innovative projects, let&apos;s build something extraordinary together!</p>
                    <h4 className='mt-5 mb-2 underline'>Connect with me on :</h4>
                    <p className='flex items-center lg:justify-start justify-center gap-2'>
                       <FaEnvelope></FaEnvelope> Email : <span className='text-text-prime'>shahidul.bd.1920@gmail.com</span>
                    </p>
                    <div className='flex items-center lg:justify-start justify-center gap-10 text-2xl mt-10'>
                        <a href="https://www.github.com/shahidulislam-20" rel='noreferrer' target='_blank'>
                            <FaGithub></FaGithub>
                        </a>
                        <a href="https://www.twitter.com/shahidul_satu" rel='noreferrer' target='_blank'>
                            <FaTwitter></FaTwitter>
                        </a>
                        <a href="https://www.linkedin.com/in/shahidulislam20" rel='noreferrer' target='_blank'>
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a href="https://www.facebook.com/shahidulislam.20" rel='noreferrer' target='_blank'>
                            <FaFacebook></FaFacebook>
                        </a>
                    </div>
                    <a href='/public/Shahidul_Resume.pdf' download="Shahidul_Resume.pdf" className='btn bg-text-prime text-black hover:text-white mt-16 text-xl px-10 h-[4rem]'>Get Resume <FaDownload></FaDownload></a>
                </div>
            </div>
        </div>
    );
};

export default About;