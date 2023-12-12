import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import photo from '../../../assets/photo.png';

const Banner = () => {
    return (
        <div className='bg-bg-prime'>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 items-center">
                <div className='lg:text-left text-center lg:py-0 py-20'>
                    <h2 className="text-6xl font-extrabold text-white uppercase">Hi, I am</h2>
                    <h2 className="my-5 text-6xl font-extrabold text-white uppercase">Md Shahidul Islam</h2>
                    <p className="text-xl font-normal">Junior MERN stack web developer</p>
                    <div className='flex items-center gap-10 text-2xl mt-5 justify-center lg:justify-start'>
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
                    <a href='/public/Shahidul_Resume.pdf' download="Shahidul_Resume.pdf" className='btn bg-text-prime text-black hover:text-white mt-10 lg:mt-40 text-xl px-10 h-[4rem]'>Get Resume <FaDownload></FaDownload></a>
                </div>
                <div className='lg:block hidden'>
                    <img className='mt-14' src={photo} alt="photo" />
                </div>
            </div>
        </div>
    );
};

export default Banner;