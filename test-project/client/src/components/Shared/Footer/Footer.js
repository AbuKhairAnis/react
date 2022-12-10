import React from 'react';
import "./Footer.css"

const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <div className='footer_container'>
            <div className="footer-text">
                <h3>&copy; {date}  All Right Resarve || Abu Khair Anis</h3>
                <p>Contact: abukhairanis123@gmail.com || 01684741665</p>
            </div>
        </div>
    );
};

export default Footer;