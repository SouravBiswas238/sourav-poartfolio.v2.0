import React from 'react';
import useLoadProjects from '../../hooks/useLoadProjects';
import SingleProjects from './SingleProjects';

const MyProjects = () => {

    const [projects] = useLoadProjects();

    return (
        <div id='projects' className='bg-black py-5'>
            <h2 className='text-center text-3xl text-white py-5'>My Latest Projects</h2>



            <div class="grid lg:grid-cols-3 gap-5 mx-10">
                {
                    projects.map(project => <SingleProjects project={project}></SingleProjects>)
                }

            </div>
        </div >
    );
};

export default MyProjects;