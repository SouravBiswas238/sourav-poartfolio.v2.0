import React from 'react';
import './Banner.css'
import mypic from '../../img/74732949.jfif'
const Banner = () => {

    const handelDownloadResume = () => {
        window.open("https://drive.google.com/u/0/uc?id=1KIcqgdsD6ruCC01nnWjvBR_RVjrvp9Qk&export=download");
    };
    return (

        <div className='bg-[#F3F3F3]  dark:bg-[#0C1322]'>
            <div className='grid lg:grid-cols-2 gap-6 lg:h-[80vh]  place-content-center py-10'>

                <div className='lg:place-self-end place-self-center lg:px-10'>
                    <div class="avatar">
                        <div class="w-80 rounded-full ring ring-white ring-offset-white dark:ring-[#8C9BB6] dark:ring-offset-[#8C9BB6] ring-offset-8">
                            <img src={mypic} />
                        </div>
                    </div>
                </div>
                <div className='place-self-center  dark:text-[#8C9BB6] '>
                    <p className='my-2 lg:text-left text-center'>Frontend-developer || Full-Stack Developer</p>
                    <h2 className='text-5xl font-bold lg:text-left text-center'>Sourav Kumar Biswas</h2>
                    <div className='lg:w-[75%] my-2 px-2 text-[19px]'>
                        <p>I am a self-motivated web developer who always keeps myself up to
                            date with the latest technology. I can adapt to any technology rapidly
                            making myself flexible upon any tech stack. A passionate, diligent
                            person who wants to learn continuously
                        </p>
                    </div>

                    <div className='flex'>
                        <button onClick={handelDownloadResume} className='font-semibold hover:bg-[#1C2880]  hover:text-white dark:text-white dark:bg-[#1F2937] text-[19px] flex items-center
                        rounded-full border-2 border-[#1C2880] py-2 px-3 my-3 ease-in duration-300'>Download Resume</button>

                        <button className='mx-3 font-semibold hover:bg-[#1C2880]  hover:text-white dark:text-white dark:bg-[#1F2937] text-[19px] flex items-center
                        rounded-full border-2 border-[#1C2880] py-2 px-3 my-3 ease-in duration-300'>Contact</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;