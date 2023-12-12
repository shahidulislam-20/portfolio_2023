import { Helmet } from "react-helmet-async";
import { FaAnglesRight, FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaLocationDot, FaTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_2eed6lm', 'template_15h40yc', e.target, 'UxPJvEY3ZmfGEUZGA')
        .then(() => {
            Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Message Sent Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div>
            <Helmet>
                <title>Contact | Md Shahidul Islam</title>
            </Helmet>
            <div className="bg-bg-prime py-20">
                <h2 className="font-bold text-5xl text-center text-white uppercase">Contact me</h2>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 max-w-7xl mx-auto items-center">
                <div className="my-20 lg:pr-20 lg:mx-0 mx-5">
                    <div className="bg-bg-prime p-5">
                        <h3 className="font-semibold text-text-prime uppercase flex items-center gap-2"><FaLocationDot></FaLocationDot> Address :</h3>
                        <p>Patuakhali District, Barisal, Bangladesh</p>
                    </div>
                    <div className="bg-bg-prime p-5 mt-5">
                        <h3 className="font-semibold text-text-prime uppercase flex items-center gap-2"><FaEnvelope></FaEnvelope> Email :</h3>
                        <p>shahidul.bd.1920@gmail.com</p>
                    </div>
                    <div className="bg-bg-prime p-5 mt-5">
                        <h3 className="font-semibold text-text-prime uppercase flex items-center gap-2"><FaAnglesRight></FaAnglesRight>Connect me with :</h3>
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
                    </div>
                </div>
                <div className="bg-bg-prime my-20 p-10">
                    <h3 className="font-semibold text-3xl uppercase text-center mb-5 mt-5">Send Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <input className="py-3 bg-bg-prime outline-0 border-b-2" type="text" name="name" placeholder="Name" />
                            <input className="py-3 bg-bg-prime outline-0 border-b-2" type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
                            <input className="py-3 bg-bg-prime outline-0 border-b-2" type="text" name="phone" placeholder="Phone" />
                            <input className="py-3 bg-bg-prime outline-0 border-b-2" type="text" name="subject" placeholder="Subject" />
                        </div>
                        <div>
                            <textarea className="w-full py-3 bg-bg-prime outline-0 border-b-2 mt-5" name="message" placeholder="Message" cols="5" rows="5"></textarea>
                        </div>
                        <div>
                            <input type="submit" className="btn mt-10 w-full bg-text-prime text-black hover:text-white" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;