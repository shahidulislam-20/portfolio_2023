import { FaBookOpen } from "react-icons/fa6";


const Education = () => {
    return (
        <div className="bg-bg-prime">
            <div className="max-w-7xl mx-auto py-28 px-5 lg:px-0">
                <h2 className="text-text-prime text-2xl font-bold uppercase text-center">Education & Skills</h2>
                <hr className='w-56 mt-1 mb-20 mx-auto' />
                <div className="">

                    {/* Education */}

                    <div className="flex md:flex-row flex-col gap-16 justify-around mb-16">
                        <div className="text-center">
                            <span className="border-text-prime border-2 text-text-prime text-xl px-5 py-3">2020 - 2021</span>
                            <h4 className="mt-8 text-2xl font-bold">M.Sc in Zoology</h4>
                            <p>National University, Bangladesh.</p>
                        </div>
                        <div className="divider md:flex hidden divider-horizontal"><FaBookOpen className="text-7xl text-text-prime"></FaBookOpen></div> 
                        <div className="text-center">
                            <span className="border-text-prime border-2 text-text-prime text-xl px-5 py-3">2016 - 2020</span>
                            <h4 className="mt-8 text-2xl font-bold">B.Sc in Zoology</h4>
                            <p>National University, Bangladesh.</p>
                        </div>
                    </div>

                    {/* Skills */}

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 text-text-prime">
                        <div className="bg-bg-prime px-10 py-3 border-2 border-text-prime">
                            <div className="flex items-center justify-between">
                                <h4>HTML</h4>
                                <h3>85%</h3>
                            </div>
                            <progress className="progress w-full" value="85" max="100"></progress>
                        </div>
                        <div className="bg-bg-prime px-10 py-3 border-2 border-text-prime">
                            <div className="flex items-center justify-between">
                                <h4>CSS</h4>
                                <h3>80%</h3>
                            </div>
                            <progress className="progress w-full" value="80" max="100"></progress>
                        </div>
                        <div className="bg-bg-prime px-10 py-3 border-2 border-text-prime">
                            <div className="flex items-center justify-between">
                                <h4>React</h4>
                                <h3>70%</h3>
                            </div>
                            <progress className="progress w-full" value="70" max="100"></progress>
                        </div>
                        <div className="bg-bg-prime px-10 py-3 border-2 border-text-prime">
                            <div className="flex items-center justify-between">
                                <h4>MongoDB</h4>
                                <h3>50%</h3>
                            </div>
                            <progress className="progress w-full" value="50" max="100"></progress>
                        </div>
                        <div className="bg-bg-prime px-10 py-3 border-2 border-text-prime">
                            <div className="flex items-center justify-between">
                                <h4>Express</h4>
                                <h3>55%</h3>
                            </div>
                            <progress className="progress w-full" value="55" max="100"></progress>
                        </div>
                        <div className="bg-bg-prime px-10 py-3 border-2 border-text-prime">
                            <div className="flex items-center justify-between">
                                <h4>Node JS</h4>
                                <h3>50%</h3>
                            </div>
                            <progress className="progress w-full" value="50" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;