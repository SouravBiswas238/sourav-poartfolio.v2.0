import React from 'react';
import MyParticles from './MyParticles';
import img from '../../img/sourav4.png'

const Banner = () => {
    return (
        <div>
            <MyParticles></MyParticles>
            <div class="hero  bg-black">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='bg-transparent w-1/2 '>
                        <img src={img} class="shadow-2xl w-full h-screen" />

                    </div>
                    <div className='w-1/2 text-white px-3'>
                        <h1 class="text-5xl font-bold">Sourav Kumar Biswas</h1>
                        <h2 class="text-3xl font-bold text-warning pt-3">Full-Stack Developer</h2>
                        <p class="py-6">I am a web developer from  Bangladesh. My expertise is in front-end web development. I would love to work forntend HTML5,CSS3, Bootstrap5,Tailwind CSS, React,React
                            Router,DaisiUi,React Bootstrap,ReactQuary,Firebase, ReactHooks. Seeking to further improve Backend skills as the future full stack developer at Atmospheric Solutions.</p>
                        <button class="btn btn-primary">Hire me</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;