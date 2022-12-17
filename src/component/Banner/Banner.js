import React from 'react';
import './Banner.css'
import mypic from '../../img/74732949.jfif'
const Banner = () => {

    const handelDownloadResume = () => {
        window.open("https://drive.google.com/file/d/1P4LgpgmHnSCjb0S_z2fPJLUtcO25uI8i/view?usp=share_link");
        window.open("");
    };
    return (

        <div className='my-bg-position  bg-[url(https://www.turing.com/blog/wp-content/uploads/2022/04/MEAN-Stack-vs-MERN-Stack.jpg)] 
       '>
            <div className='grid lg:grid-cols-2 gap-6 lg:h-[80vh]  place-content-center py-10'>

                <div className='lg:place-self-end place-self-center lg:px-10'>
                    <div className="avatar">
                        <div className="lg:w-80 w-52 rounded-full ring  ring-[#8C9BB6]  ring-offset-[#8C9BB6] ring-offset-8">
                            <img src={mypic} />
                        </div>
                    </div>
                </div>
                <div className='place-self-center   text-[#d6d8db] '>
                    <p className='my-2 lg:text-left text-center'>Frontend-developer || Full-Stack Developer</p>
                    <h2 className='text-5xl font-bold lg:text-left text-center'>Sourav Kumar Biswas</h2>
                    <div className='lg:w-[75%] my-2 px-4 lg:px-2 lg:text-[19px]'>
                        <p>I am a self-motivated web developer who always keeps myself up to
                            date with the latest technology. I can adapt to any technology rapidly
                            making myself flexible upon any tech stack. A passionate, diligent
                            person who wants to learn continuously
                        </p>
                    </div>

                    <div className='flex'>
                        <button onClick={handelDownloadResume} className='font-semibold hover:bg-[#1C2880]  hover:text-white  text-white  bg-[#1F2937] text-[19px] flex items-center
                        rounded-full border-2 border-[#1C2880] py-2 px-3 my-3 ease-in duration-300'>Download Resume</button>

                        <button className='mx-3 font-semibold hover:bg-[#1C2880]  hover:text-white  text-white  bg-[#1F2937] text-[19px] flex items-center
                        rounded-full border-2 border-[#1C2880] py-2 px-3 my-3 ease-in duration-300'>Contact</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;