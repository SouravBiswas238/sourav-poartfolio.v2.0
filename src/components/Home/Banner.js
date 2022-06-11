import React from 'react';
import MyParticles from './MyParticles';
import img from '../../img/sourav5.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <MyParticles></MyParticles>
            <div class="hero  bg-black">
                <div class="hero-content flex-col lg:flex-row-reverse lg:gap-5 ">



                    <div class="avatar"
                    >
                        <div class="lg:w-96 rounded-full">
                            <img className='' src={img} alt="" />
                        </div>

                    </div>

                    <div className='lg:w-1/2 text-white px-3'>
                        <h1 class="lg:text-5xl text-3xl font-bold">Sourav Kumar Biswas</h1>
                        <h2 class="lg:text-3xl text-xl font-bold text-warning pt-3">Full-Stack Developer</h2>
                        <p class="lg:py-6 py-2">I am a web developer from  Bangladesh. My expertise is in front-end web development. I would love to work forntend HTML5,CSS3, Bootstrap5,Tailwind CSS, React,React
                            Router,DaisiUi,React Bootstrap,ReactQuary,Firebase, ReactHooks. Seeking to further improve Backend skills as the future full stack developer at Atmospheric Solutions.</p>
                        <Link to="/contact">

                            <button class="btn btn-primary">Hire me</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Banner;