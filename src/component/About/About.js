import React from 'react';
import './About.css'

const About = () => {


    const handelViewResume = () => {
        window.open("https://drive.google.com/file/d/10jvV8K0ilWSAo2U-f2cdGNPbAiiM8XpS/view?usp=share_link");
    };
    return (
        <div id='about' className=' about-bg  lg:bg-[url(https://img.freepik.com/free-vector/gradient-luxury-background_23-2148999255.jpg?w=2000)] bg-[url(https://sonatafy.com/wp-content/uploads/2021/12/mern-stack-developers.jpg)]  border-y-2 py-10'>
            <div className='text-center text-3xl  mb-10'>
                <h2 className=' text-white text-bold uppercase text-5xl' >About <span className=" text-[#38BDF8] ">ME</span> </h2>
            </div>


            <div className='grid lg:grid-cols-2 lg:grid-flow-col gap-4'>

                <div className="lg:mx-4  px-4">
                    <h5 className="lg:text-3xl hidden lg:block  text-[#fcfcfc]  text-uppercase fw-bold mb-5 mx-10">Personal Infos</h5>
                    <div className='grid lg:grid-cols-2 gap-2'>
                        <div className=" shadow-1 py-5 lg:p-0 p-5">
                            <table className="table-fixed z-10">
                                <tbody>
                                    <tr >
                                        <td> <span className='text-white'> First Name : </span> </td>
                                        <td className='px-2'> <span className=" text-white "> Sourav</span> </td>
                                    </tr>
                                    <tr>
                                        <td><span className='text-white'> Last Name : </span> </td>
                                        <td className='px-2'> <span className=" text-white"> Kumar Biswas</span> </td>
                                    </tr>
                                    <tr>
                                        <td><span className='text-white'> Age    : </span> </td>
                                        <td className='px-2'> <span className=" text-white"> 22</span> </td>
                                    </tr>
                                    <tr>
                                        <td><span className='text-white'> Nationality :</span> </td>
                                        <td className='px-2'> <span className=" text-white"> Bangladesh </span> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="shadow-1 py-5 lg:p-0 p-5">
                            <div className="my-address-info py-0">
                                <table className="table-fixed">
                                    <tbody>
                                        <tr className=' '>
                                            <td className='relative'> <span className='text-white absolute left-0 top-0 '> Phone  <span className='inset-y-0 right-0'> :</span> </span> </td>
                                            <td className='px-2'> <span className=" text-white "> +8801852175823</span> </td>
                                        </tr>
                                        <tr>
                                            <td className='text-white'><span className='text-white'> Skpe    </span> <span className='text-right'>:</span> </td>
                                            <td className='px-2'> <span className=" text-white"> sourav427 </span> </td>
                                        </tr>
                                        <tr>
                                            <td><span className='text-white'> Address   :  </span> </td>
                                            <td className='px-2'> <span className=" text-white"> Magura, Bangladesh</span> </td>
                                        </tr>

                                        <tr>
                                            <td><span className='text-white'> Gmail   :</span> </td>
                                            <td className='px-2'> <span className=" text-white"> souravbiswas427@gmail.com </span> </td>
                                        </tr>
                                        <tr>
                                            <td><span className='text-white'>Language :</span> </td>
                                            <td className='px-2'> <span className=" text-white"> Bangla, English, Hindi</span> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <button onClick={handelViewResume} className='font-semibold hover:bg-[#1C2880]  hover:text-white  text-white  bg-[#1F2937] text-[19px] flex items-center
                        rounded-full border-2 border-[#1C2880] py-2 px-3 my-3 ease-in duration-300'>View CV</button>

                </div>

                <div className='grid grid-cols-2 gap-2'>

                    <div className="lg:w-[75%] shadow-2 lg:h-[200px] p-5 hover:bg-[#1C2880]    text-white mb-2">
                        <h2 className='text-warning text-3xl my-0 text-center'>2+</h2>
                        <h2 className="lg:text-2xl uppercase text-center mx-auto" >YEARS OF EXPERIENCE!</h2>

                    </div>
                    <div className="lg:w-[75%] shadow-2 lg:h-[200px] p-5 hover:bg-[#1C2880]    text-white   mb-2">
                        <h2 className='text-warning text-3xl text-center'>35 +</h2>
                        <h2 className=" lg:text-2xl uppercase text-center mx-auto">My Projects</h2>
                    </div>




                </div>

            </div>
        </div >
    );
};

export default About;