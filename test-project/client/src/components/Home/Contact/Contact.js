import { React } from 'react';
import './Contact.css'
import contact from '../../../img/contact1.png'
import facebook from "../../../img/Facebook-logo-blue-circle-large-transparent-png.png";
import linkedin from "../../../img/linkedin-white-logo-png-14.png";
import instagram from "../../../img/download.png";
import twitter from "../../../img/Twitter-logo-png-bird-transparent.png";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = data => {
         fetch('http://localhost:4444/api/v1/message', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.message) {
                    toast.success('succesfully sent message')
                    reset()
                }
                else {
                    toast.warning(`Something Wrong`)
                }
            })


    }

    return (
        <div className='contact'>
            <h1 className='text-brand'>Contact Us</h1>
            <div className="contact-container">
                <div className='contact-text-area'>
                    <div>
                        <h3 className="me">Contact me</h3>
                        <img className='c-img' src={contact} alt="" />
                    </div>
                    <div className="contact-me">
                        <h5>Name: Abu Khair Anis</h5>
                        <p>Address: Trishl, Mymensing</p>
                        <p>Email: abukhairanis123@gmail.com</p>
                        <p>Phone: +8801937925006, <br /> +8801684741665</p>
                    </div>
                    <div className='social-icon'>
                        <ul className='ul-item '>
                            <li className='li-item'>
                                <a href="https://www.facebook.com/abukhair.anis.5/">  <img src={facebook} alt="" /></a>
                            </li>
                            <li className='li-item'>
                                <a href="https://www.linkedin.com/in/abukhair/"> <img src={linkedin} alt="" /></a>
                            </li>
                            <li className='li-item'>
                                <a href="https://www.instagram.com/abukhairanis/?hl=en"><img src={instagram} alt="" /></a>
                            </li>
                            <li className='li-item'>
                                <a href="https://twitter.com/AbuKhairAnis"><img src={twitter} alt="" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='contact-from'>
                    <p style={{ marginLeft: "10px" }} >Sent A Short Message</p>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='input-area' type="text" placeholder="Name" {...register("name", {})} />
                            <input className='input-area' type="email" placeholder="Email Address" {...register("email", {})} />
                            <input className='input-area' type="text" placeholder="Phone Number" {...register("phoneNumber", {})} />
                            <input className='input-area' type="text" placeholder="Address" {...register("address", {})} />
                            <textarea className='text-area' {...register("short_message", {})} />
                            <input className='btn-brand btn' type="submit" />
                        </form>
                    </div>

                </div>
            </div>


        </div>


    );
};

export default Contact;