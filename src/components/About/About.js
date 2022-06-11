import { faSearch, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {


    const handelViewResume = () => {
        window.open("https://drive.google.com/file/d/1KIcqgdsD6ruCC01nnWjvBR_RVjrvp9Qk/view?usp=sharing");
    };
    return (
        <div className='bg-black border-b-2 py-5'>
            <div className='text-center text-3xl text-secondary mb-10'>
                <h2 className='text-white text-bold uppercase text-5xl' >About <span class="text-warning">ME</span> </h2>
            </div>


            <div className='grid lg:grid-cols-2 lg:grid-flow-col gap-4'>

                <div class="mx-4 px-10 ">
                    <h5 class="text-3xl text-base-200  text-uppercase fw-bold mb-5 mx-10">Personal Infos</h5>
                    <div className='grid lg:grid-cols-2'>
                        <div class="">
                            <h4 className='text-slate-400'>First Name: <span class="text-white"> Sourav</span></h4>
                            <h4 className='text-slate-400'>last Name: <span class="text-white"> Biswas</span></h4>
                            <h4 className='text-slate-400'>Age: <span class="text-white"> 22</span></h4>
                            <h4 className='text-slate-400'>Nationality: <span class="text-white"> Bangladesh</span></h4>
                        </div>
                        <div class=" ">
                            <div class="my-address-info py-0">
                                <h4 className='text-white'><span class="text-slate-400">Phone: </span> +8801852175823 </h4>
                                <h4 className='text-white'><span class="text-slate-400">Address: </span> Magura </h4>
                                <h4 className='text-white'><span class="text-slate-400">Skpe: </span> sourav427 </h4>
                                <h4 className='text-white'><span class="text-slate-400">Gmail: </span> souravbiswas427@gmail.com </h4>
                                <h4 className='text-white'><span class="text-slate-400">Language: </span> Bangla,English,Hindi </h4>
                            </div>
                        </div>
                    </div>

                    <button onClick={handelViewResume} class=" btn btn-primary text-white mx-2">
                        <h2>View CV</h2>
                        <span class="text-warning  mx-2">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </button>

                </div>

                <div className='grid lg:grid-cols-2'>

                    <div class="lg:w-2/3 lg:h-[200px] p-5 bg-neutral text-neutral-content mb-2">
                        <h2 className='text-warning text-3xl my-0 text-center'>3+</h2>
                        <h2 class="text-2xl uppercase" >YEARS OF EXPERIENCE!</h2>

                    </div>
                    <div class="lg:w-2/3 lg:h-[200px] p-5 bg-neutral text-neutral-content mb-2">
                        <h2 className='text-warning text-3xl text-center'>97 +</h2>
                        <h2 class="text-end text-3xl uppercase">Projects</h2>
                    </div>




                </div>

            </div>
        </div>
    );
};

export default About;