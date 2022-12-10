import React from 'react';
import hero from "../../../img/hero.png";
import './Header.css'

const Header = () => {
    return (
        <div className='container'> 
            <div className='grid-item  '>
                <div className='text-content'>
                    <h3>Welcome</h3>
                    <h2 className='text-brand'>Abu Khair Anis</h2>
                    <h4>Web Developer</h4>
                    <p>Front-End Web Developer with knowledge of ReactJs NextJs, Typescript, ExpressJs, Node, MongoDB. Also has experience with developing backend APIs using web frameworks.
                        And also have experience in Wordpress theme customization & Developing</p>
                </div>

                <div className='image-area'>

                    <img className='img' src={hero} alt="" />


                </div>

            </div>
        </div>
    );
};

export default Header;