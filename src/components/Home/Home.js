
import React from 'react';
import About from '../About/About';
import MySkills from '../About/MySkills';
import MyProjects from '../Projects/MyProjects';
import Contact from './Contact';
import Banner from './Banner';

const Home = () => {



    return (
        <div>
            <Banner></Banner>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;