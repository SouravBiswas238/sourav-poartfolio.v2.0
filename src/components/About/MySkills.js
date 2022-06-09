import React from 'react';
import { RadialProgress } from 'react-radial-progress-indicator';
import Progress from './Progress';

const MySkills = () => {


    return (
        <div className='bg-black py-5'>
            <div className='text-center text-3xl text-secondary mb-10'>
                <h2 className='text-white text-bold uppercase text-5xl' >Skills </h2>
            </div>


            <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-y-10'>

                <Progress value='90' name='Html'></Progress>
                <Progress value='90' name='CSS'></Progress>
                <Progress value='70' name='JavaScript'></Progress>
                <Progress value='91' name='Bootstrap 5'></Progress>
                <Progress value='85' name='Tailwind'></Progress>
                <Progress value='80' name='React'></Progress>
                <Progress value='65' name='Node.js'></Progress>
                <Progress value='75' name='mongodb'></Progress>
                <Progress value='60' name='Express.js'></Progress>
                <Progress value='70' name='Firebase'></Progress>



            </div>


        </div >
    );
};

export default MySkills;