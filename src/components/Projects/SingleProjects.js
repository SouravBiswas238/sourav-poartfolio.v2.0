import React from 'react';
import { Link } from 'react-router-dom';

const SingleProjects = (props) => {
    const { picture, name, tools, liveSite } = props.project;
    return (
        <div>
            <div class="flex lg:flex-col  border rounded transition ease-in-out hover:scale-90 hover:opacity-90 hover:bg-cyan-700 duration-400">
                <div className='p-2 lg:w-auto w-3/6 scroll snap-y'>
                    <img className='lg:w-96 lg:h-96 ' src={picture} alt="flashElectronic"></img>
                </div>
                <div class=" lg:w-auto w-3/6 text-center text-white hover:text-primary py-3">
                    <h2 class="text-2xl bold text-warning pb-3">{name}
                    </h2>

                    <h3 className='text-l'><span className='text-secondary'>Tools: </span>{tools}</h3>
                    <a href={liveSite} target="_blank" className='btn btn-accent my-4 px-5 text-white'>live site</a>


                </div>
            </div>
        </div >
    );
};

export default SingleProjects;