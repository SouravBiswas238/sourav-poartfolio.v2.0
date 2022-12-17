import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className='bg-[#f3f3f3] skills-bg lg:h-[60vh] bg-[url(https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/banner_image_9bba12f2c6.jpg)] text-[#1C2880]  text-[#E2E8F0] border-b-2 py-10'>
            <div className='text-center text-3xl  mb-10'>
                <h2 className=' text-white text-bold uppercase text-5xl' >My Special <span className=" text-[#38BDF8] text-[#3878DF]">Skills</span> </h2>
            </div>


            <div className='grid lg:grid-cols-3 justify-items-center lg:mx-3 lg:gap-4'>
                <div className='expertise '>
                    <h2 className='text-white text-center my-2 uppercase text-2xl'>Expertise </h2>
                    <div className='flex justify-between '>
                        <span>   🔰 Html</span>
                        <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span>   🔰 CSS</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span>   🔰 REACT</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="80" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span>   🔰 TAILWIND</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span className='mr-3'>   🔰 JAVASCRIPT</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="80" max="100"></progress>
                        </div>
                    </div>


                </div>

                <div className='familier'>
                    <h2 className='ark:text-white text-center my-2 uppercase text-2xl'>Familler </h2>

                    <div className='flex justify-between '>
                        <span className='mr-3'>   🔰 EXPRESS JS</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="70" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span className='mr-3'>   🔰 MONGODB</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="70" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span className='mr-3'>   🔰 Mongoose</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="60" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span className='mr-3'>   🔰 Socket.io</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="50" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span className='mr-3'> 🔰 Java</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="50" max="100"></progress>
                        </div>
                    </div>


                </div>

                <div className='tools'>
                    <h2 className='ark:text-white text-center my-2 uppercase text-2xl'>Tools </h2>
                    <div className='flex justify-between '>
                        <span className='mr-3'>   🔰 Git</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="60" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span className='mr-3'>   🔰 Git Hub</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="70" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span className='mr-3'>   🔰 VS Code</span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="70" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex justify-between '>
                        <span className='mr-3'>   🔰 Figma </span> <div>
                            <progress className="progress progress-info lg:w-56 w-40" value="60" max="100"></progress>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Skills;