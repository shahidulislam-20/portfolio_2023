import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaAngleRight, FaArrowRight } from "react-icons/fa6";

const ProjectDetails = () => {

    const [loadedData, setLoadedData] = useState([]);
    const id = useParams();

    useEffect(() => {
        fetch('/public/projects.json')
            .then(res => res.json())
            .then(data => setLoadedData(data))
    }, [])

    const RemainData = loadedData.filter(data => data.id === id.id)
    console.log(RemainData)

    console.log(id)

    return (
        <div>
            <div className="bg-bg-prime py-20">
                <h2 className="font-bold text-5xl text-center text-white uppercase">Portfolio Details</h2>
            </div>
            <div className="max-w-7xl mx-auto py-28">
                {
                    RemainData.map((data, index) => <div
                        key={index}
                        className="grid lg:grid-cols-2 grid-cols-1 lg:px-0 px-5 gap-20"
                    >
                        <div>
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={10}
                                slidesPerView={2}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                breakpoints={{
                                    // when window width is >= 768px
                                    768: {
                                      slidesPerView: 2,
                                      spaceBetween: 10,
                                    },
                                    // when window width is >= 992px
                                    360: {
                                      slidesPerView: 1,
                                      spaceBetween: 10,
                                    },
                                  }}
                            >
                                {
                                    data.img.map((im, ind) => <SwiperSlide
                                        key={ind}
                                    >
                                        <img className="h-[40rem] w-full" src={im} alt="" />
                                    </SwiperSlide>)
                                }
                                {/* <SwiperSlide>Slide 1</SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide> */}
                                ...
                            </Swiper>
                        </div>
                        <div>
                            <h3 className="font-bold text-3xl ">{data.name}</h3>
                            <div className="mt-5">
                                <h3 className="font-semibold">Features :</h3>
                                <h4>{data.features.map((data, i) => <p key={i} className="flex items-center"><FaAngleRight></FaAngleRight> {data}</p>)}</h4>
                            </div>
                            <div className="mt-5">
                                <h3 className="font-semibold">Technologies</h3>
                                <p className="flex items-center"><FaArrowRight></FaArrowRight> <span>Frontend : </span>{data.technologies.Frontend}</p>
                                <p className="flex items-center"><FaArrowRight></FaArrowRight> <span>Backend : </span>{data.technologies.Backend}</p>
                                <p className="flex items-center"><FaArrowRight></FaArrowRight> <span>Database : </span>{data.technologies.Database}</p>
                                <p className="flex items-center"><FaArrowRight></FaArrowRight> <span>Additional Tools : </span>{data.technologies.Additional_Tools}</p>
                            </div>
                            <div className="mt-5">
                                <h4>Live Website Link : <a className="text-text-prime" href={data.live}>{data.live}</a></h4>
                                <h4>View Source Code on Github : <a className="text-text-prime" href={data.github}>{data.github}</a></h4>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProjectDetails;