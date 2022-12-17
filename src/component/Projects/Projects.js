import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import './Projects.css'



const Projects = () => {

    //data
    const ProjectData = [
        {
            "id": 1,
            "image": "https://i.ibb.co/1Z0G5Kx/collage-1.jpg",
            // "image": "https://i.ibb.co/WxPQXHN/collage.jpg",
            "name": "Recruit Hub",
            "shortDescription": "A hiring Agency",
            "liveLink": "https://recruit-hub-bbd21.web.app/",
            "clientCode": "https://github.com/thecreativegang/recruit-hub-client-2",
            "serverCode": "https://github.com/thecreativegang/recruit-hub-server",


        },
        {
            "id": 2,
            "image": "https://i.ibb.co/K7GP7M6/collage.jpg",
            "name": "Flash Electronic",
            "shortDescription": "A manufacturer website",
            "liveLink": "https://flash-electronic.web.app/",
            "clientCode": "https://github.com/SouravBiswas238/manufacturer-website-client",
            "serverCode": "https://github.com/SouravBiswas238/manufacturer-website-server",


        },

        {
            "id": 7,
            "image": " https://i.ibb.co/qgJmNhg/3.jpg",
            "name": "Sourav Fitness",
            "shortDescription": "Personal Fitness Trainer",
            "liveLink": "https://flash-electronic.web.app/",
            "clientCode": "https://github.com/SouravBiswas238/independent-service-provider",



        }
    ]

    return (
        <div className='slider-container py-10  bg-[#0b1120]'>
            <div className="text-center mb-10">
                <h1 className="  text-[#E2E8F0] text-[2rem] md:text-[3.5rem] leading-[3.2rem]  font-semibold mb-2">
                    My Amazing Projects
                </h1>
            </div>

            {/* //swiper js  */}
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                navigation={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}

                slidesPerView={window.innerWidth < 768 ? 1 : "auto"}

                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{
                    clickable: true
                }}
                className="mySwiper"
            >

                {
                    ProjectData.map(project => <SwiperSlide key={project.id} className='p-4 bg-white  bg-[#182133]  shadow-lg'>
                        <div className='bg-red h-full'>

                            <img src={project?.image} alt='images' />

                            <div className='grid gap-1'>


                                <h1 className='text-[#1C2880]  text-[#38BDF8] font-semibold mt-2 flex justify-between'>

                                    {project?.name}
                                    <span className='font-semibold text-[16px] flex items-center'>

                                        <a className=' hover:bg-[#1C2880]  hover:text-white  text-white  bg-[#1F2937] 
                        rounded-full border-2 border-[#1C2880] py-2 px-3 ease-in duration-300' href={project?.liveLink} target='_'  >liveSite</a>
                                        <a className='mx-2 hover:bg-[#1C2880]  hover:text-white  text-white  bg-[#1F2937] 
                        rounded-full border-2 border-[#1C2880] py-2 px-3 ease-in duration-300'  href={project?.clientCode} target='_' >Client</a>
                                        {
                                            project.serverCode && <a className='font-semibold hover:bg-[#1C2880]  hover:text-white  text-white  bg-[#1F2937] flex items-center
                                            rounded-full border-2 border-[#1C2880] py-2 px-3 ease-in duration-300'  href={project?.serverCode} target='_' >Server</a>
                                        }
                                    </span>

                                </h1>


                                <h6 className=' text-[#E2E8F0]'>{project?.shortDescription}</h6>

                            </div>


                        </div>

                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );

};
export default Projects;