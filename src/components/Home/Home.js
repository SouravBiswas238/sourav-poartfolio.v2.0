import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import profile from '../../img/sourav1.jpg'
import About from '../About/About';
import MySkills from '../About/MySkills';
import WaterWave from 'react-water-wave';

const Home = () => {

    const handelDownloadResume = () => {
        window.open("https://drive.google.com/u/0/uc?id=1KIcqgdsD6ruCC01nnWjvBR_RVjrvp9Qk&export=download");
    };

    return (
        <div>
            <div className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${profile})`
                }}>



                <div className="hero-overlay lg:bg-opacity-100"></div>
                <div className="hero-content  text-neutral-content">
                    <div className='w-1/5'><img className='lg:block hidden w-full' src={profile} alt="myprofile" /></div>

                    <div className="w-4/5">
                        <h1 className='mb-3 text-3xl font-bold'>I am  Sourav Kumar Biswas</h1>
                        <h1 className='mb-3 text-3xl font-bold'>Web developer</h1>
                        <button onClick={handelDownloadResume} class=" btn btn-primary text-white mx-2">
                            <h2>Download CV</h2>
                            <span class="text-warning  mx-2">
                                <FontAwesomeIcon icon={faDownload} />
                            </span>
                        </button>

                    </div>
                </div>
            </div>

            <About></About>
            <MySkills></MySkills>
        </div>
    );
};

export default Home;