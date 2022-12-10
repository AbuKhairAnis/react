import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../img/logo.png";
import "./Navber.css"


const Navber = () => {

    // window.addEventListener("scroll", function () {
    //     const header = document.querySelector(".header")
    //     header.classList.toggle("active", window.scrollY > 100)});

    const  [mobile, setMobile]  = useState(false)


    return (
        <div className="header">
            <div className='d_flex container '>
                <div className='logo'>
                    <img className='logo-img' src={logo} alt="" />
                </div>
               <div className={mobile ? " link f_flex" : "nav-links-mobile" } onClick={() => setMobile(false)} >
               <div  className='nav_item' >
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/features" >Features</Link>
                    <Link to="/project" >Project</Link>
                    <Link to="/blog" >Blog</Link>
                    <Link to="/services" >Services</Link>
                    <Link to="/contact" >Contact</Link>
                </div>
                <button className='toggle' onClick={() => setMobile(!mobile)}>
                    {
                        mobile ? <FontAwesomeIcon className='close' icon={faTimes}></FontAwesomeIcon>:<FontAwesomeIcon className='open' icon={faBars}></FontAwesomeIcon> 
                    }
                </button>
               </div>
            </div>
        </div>
    );
};

export default Navber;