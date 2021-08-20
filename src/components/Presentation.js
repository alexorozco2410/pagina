import React from 'react'

import '../assets/Presentation.css'
import profileimg from '../assets/images/perfil.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';


function Presentation() {
    return (
        <div className="pt-5">
            <div className="mybg d-flex justify-content-center align-items-center" id="presentation">
            <div className="container container-fluid bg-p">
                <div className="row d-flex cp align-items-center">
                <div className="col-md-6 img-p">
                        <img src={profileimg} alt="Alexis Orozco" className="prof-img">
                        </img>
                    </div>
                    <div className="col-md-5 info-p">
                        <h1 className="nametext1">Alexis</h1>
                        <h3 className="nametext2">Orozco Hernández</h3>
                        <h4 className="nametext3">Desarrollador</h4>
                    </div>
                    <div className="col-md-1 social-media flex-column align-items-center d-flex">
                        <div className=" contact-container row container-fluid">
                            <a href="https://github.com/alexorozco2410" target="_blank" rel="noreferrer" className="btn contact-items mb-3">
                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/alexis-orozco-hern%C3%A1ndez-4b8499213/" target="_blank" rel="noreferrer" className="btn contact-items mb-3">
                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </div>
                            </a>
                            <a href="https://t.me/AlexOrozco10" target="_blank" rel="noreferrer" className="btn contact-items mb-3">
                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faTelegram}/>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/alex_orozco10/" target="_blank" rel="noreferrer" className="btn contact-items mb-3">
                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Presentation